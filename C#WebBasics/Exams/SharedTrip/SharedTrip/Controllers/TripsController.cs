using MyWebServer.Controllers;
using MyWebServer.Http;
using SharedTrip.Data;
using SharedTrip.Models;
using SharedTrip.Models.Trips;
using SharedTrip.Services;
using System;
using System.Globalization;
using System.Linq;

namespace SharedTrip.Controllers
{
    using static DataConstants;

    public class TripsController : Controller
    {
        private readonly IValidator validator;
        private readonly SharedTripDbContext data;        

        public TripsController(
            SharedTripDbContext data,
            IValidator validator)
        {
            this.data = data;
            this.validator = validator;
        }

        public HttpResponse All()
        {
            var tripsQuery = data
                .Trips
                .AsQueryable();

            var trips = tripsQuery                
                .Select(t => new TripListingUserFormModel
                {
                    Id = t.Id,
                    StartPoint = t.StartPoint,
                    EndPoint = t.EndPoint,
                    DepartureTime = t.DepartureTime.ToString(DateTimeFormat),
                    Seats = t.Seats                    
                })
                .ToList();
                        
            return View(trips);
        }

        [Authorize]
        public HttpResponse Add() => View();

        [HttpPost]
        [Authorize]
        public HttpResponse Add(AddTripFormModel model)
        {            
            bool isDepartureTimeValid = DateTime.TryParseExact(
                model.DepartureTime,
                DateTimeFormat,
                CultureInfo.InvariantCulture,
                DateTimeStyles.None,
                out DateTime departureTime);

            var modelErrors = validator.ValidateTrip(model, isDepartureTimeValid);

            if (modelErrors.Any())
            {
                return Error(modelErrors);
            }

            var repository = new Trip
            {
                StartPoint = model.StartPoint,
                EndPoint = model.EndPoint,
                DepartureTime = departureTime,
                ImagePath = model.ImagePath,    
                Seats = model.Seats,
                Description = model.Description               
            };

            data.Trips.Add(repository);
            data.SaveChanges();

            return Redirect("/Trips/All");
        }
              
        [Authorize]
        public HttpResponse Details(string tripId)
        {           
            var tripDetails = data
                .Trips
                .Where(t => t.Id == tripId)
                .Select(t => new DetailsListingViewModel
                {
                    Id = t.Id,
                    StartPoint = t.StartPoint,
                    EndPoint = t.EndPoint,
                    DepartureTime = t.DepartureTime.ToString(DateTimeFormat),
                    ImagePath = t.ImagePath,    
                    Seats = t.Seats,
                    Description = t.Description
                })
                .FirstOrDefault();

            return View(tripDetails);
        }

        [Authorize]
        public HttpResponse AddUserToTrip(string tripId)
        {
            var user = data.Users.FirstOrDefault(u => u.Id == User.Id); //taking the user by Id
            var trip = data.Trips.FirstOrDefault(t => t.Id == tripId); //taking the trip by Id

            try
            {
                var userTrip = new UserTrip
                {
                    TripId = tripId,
                    Trip = trip,
                    User = user,
                    UserId = User.Id
                };

                if (data.UserTrips.Contains(userTrip))
                {
                    throw new InvalidOperationException();
                }

                data.UserTrips.Add(userTrip);
                data.SaveChanges();
            }
            catch (InvalidOperationException)
            {
                return Redirect($"/Trips/Details?tripId={tripId}");
            }

            if (trip.Seats < 1)
            {
                return Error("No seats available");
            }

            trip.Seats--; //taking out 1 seat

            data.SaveChanges();

            return Redirect("/Trips/All");
        }
    }
}
