﻿namespace Git.Controllers
{
    using System.Linq;
    using Git.Data;
    using Git.Data.Models;
    using Git.Models.Repositories;
    using Git.Services;
    using MyWebServer.Controllers;
    using MyWebServer.Http;

    using static Data.DataConstants;

    public class RepositoriesController : Controller
    {
        private readonly GitDbContext data;
        private readonly IValidator validator;

        public RepositoriesController(
            GitDbContext data, 
            IValidator validator)
        {
            this.data = data;
            this.validator = validator;
        }

        public HttpResponse All()
        {
            var repositoriesQuery = data
                .Repositories
                .AsQueryable();

            if (User.IsAuthenticated)
            {
                repositoriesQuery = repositoriesQuery
                    .Where(r => r.IsPublic || r.OwnerId == User.Id);
            }
            else
            {
                repositoriesQuery = repositoriesQuery
                    .Where(r => r.IsPublic);
            }

            var repositores = repositoriesQuery
                .OrderByDescending(r => r.CreatedOn)
                .Select(r => new RepositoryListingViewModel
                {
                    Id = r.Id,
                    Name = r.Name,
                    Owner = r.Owner.Username,
                    CreatedOn = r.CreatedOn.ToLocalTime().ToString("F"),
                    Commits = r.Commits.Count()
                })
                .ToList();

            return View(repositores);
        }

        [Authorize]
        public HttpResponse Create() => View();

        [HttpPost]
        [Authorize]
        public HttpResponse Create(CreateRepositoryFormModel model)
        {
            var modelErrors = validator.ValidateRepository(model);

            if (modelErrors.Any())
            {
                return Error(modelErrors);
            }

            var repository = new Repository
            {
                Name = model.Name,
                IsPublic = model.RepositoryType == RepositoryPublicType,
                OwnerId = User.Id
            };

            data.Repositories.Add(repository);
            data.SaveChanges();

            return Redirect("/Repositories/All");
        }
    }
}
