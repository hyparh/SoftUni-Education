using FootballManager.Data;
using FootballManager.Data.Models;
using FootballManager.Models.Players;
using FootballManager.Services;
using MyWebServer.Controllers;
using MyWebServer.Http;
using System;
using System.Linq;

namespace FootballManager.Controllers
{
    public class PlayersController : Controller
    {
        private readonly IValidator validator;
        private readonly FootballManagerDbContext data;

        public PlayersController(
            IValidator validator,
            FootballManagerDbContext data)
        {
            this.validator = validator;
            this.data = data;
        }

        [Authorize]
        public HttpResponse All()
        {
            var playersQuery = data
                .Players
                .AsQueryable();

            var players = playersQuery
                .Select(c => new PlayerListingViewModel
                {
                    Id = c.Id,
                    FullName = c.FullName,
                    ImageUrl = c.ImageUrl,
                    Position = c.Position,
                    Speed = c.Speed,
                    Endurance = c.Endurance,
                    Description = c.Description
                })
                .ToList();

            return View(players);
        }

        [Authorize]
        public HttpResponse Add()
        {            
            return View();
        }

        [Authorize]
        [HttpPost]
        public HttpResponse Add(AddPlayerFormModel model)
        {
            var modelErrors = validator.ValidatePlayer(model);

            if (modelErrors.Any())
            {
                return Error(modelErrors);
            }

            var player = new Player
            {
                FullName = model.FullName,
                ImageUrl = model.ImageUrl,
                Position = model.Position,
                Speed = model.Speed,
                Endurance= model.Endurance,
                Description= model.Description,                
            };

            data.Players.Add(player);
            data.SaveChanges();

            return Redirect("/Players/All");
        }

        [Authorize]
        public HttpResponse Collection()
        {
            var userPlayersQuery = data
                .UserPlayers
                .Where(i => i.UserId == User.Id)
                .AsQueryable();

            var players = data.Players
                .Where(p => p.Id == userPlayersQuery
                .Select(i => i.PlayerId)
                .FirstOrDefault())
                    .Select(p => new PlayerListingViewModel
                    {
                        Id = p.Id,
                        FullName = p.FullName,
                        ImageUrl = p.ImageUrl,
                        Position = p.Position,
                        Speed = p.Speed,
                        Endurance = p.Endurance,
                        Description = p.Description
                    })
                    .ToList();

            return View(players);
        }

        [Authorize]        
        public HttpResponse AddToCollection(string playerId)
        {
            var user = data.Users.FirstOrDefault(u => u.Id == User.Id);
            var player = data.Players.FirstOrDefault(p => p.Id == playerId);

            try
            {
                var userPlayer = new UserPlayer
                {
                    PlayerId = playerId,
                    Player = player,
                    User = user,
                    UserId = User.Id
                };

                if (data.UserPlayers.Contains(userPlayer))
                {
                    throw new InvalidOperationException("This player already exists in the collection.");
                }

                data.UserPlayers.Add(userPlayer);
                data.SaveChanges();
            }
            catch (InvalidOperationException)
            {
                return Redirect($"/Players/All");
            }
                       
            data.SaveChanges();

            return Redirect("/Players/All");
        }

        [Authorize]
        public HttpResponse RemoveFromCollection(string playerId)
        {
            var userPlayer = data.UserPlayers.FirstOrDefault(p => p.PlayerId == playerId);

            data.UserPlayers.Remove(userPlayer);
            data.SaveChanges();

            return Redirect($"/Players/Collection");
        }
    }
}
