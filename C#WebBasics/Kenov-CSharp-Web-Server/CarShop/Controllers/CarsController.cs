namespace CarShop.Controllers
{
    using System.Linq;
    using CarShop.Data;
    using CarShop.Data.Models;
    using CarShop.Models.Cars;
    using CarShop.Services;
    using MyWebServer.Controllers;
    using MyWebServer.Http;

    public class CarsController : Controller
    {
        private readonly IValidator validator;        
        private readonly IUserService user;       
        private readonly CarShopDbContext data;

        public CarsController(
            IValidator validator, 
            IUserService user,
            CarShopDbContext data)
        {
            this.validator = validator;
            this.user = user;
            this.data = data;
        }

        [Authorize]
        public HttpResponse All()
        {
            var carsQuery = data
                .Cars
                .AsQueryable();

            if (user.IsMechanic(User.Id))
            {
                carsQuery = carsQuery
                    .Where(c => c.Issues.Any(i => !i.IsFixed));
            }
            else
            {
                carsQuery = carsQuery
                    .Where(c => c.OwnerId == User.Id);
            }

            var cars = carsQuery
                .Select(c => new CarListingViewModel
                {
                    Id = c.Id,
                    Model = c.Model,
                    Year = c.Year,
                    Image = c.PictureUrl,
                    PlateNumber = c.PlateNumber,
                    RemainingIssues = c.Issues.Count(i => !i.IsFixed),
                    FixedIssues = c.Issues.Count(i => i.IsFixed)
                })
                .ToList();

            return View(cars);
        }

        [Authorize]
        public HttpResponse Add()
        {
            if (user.IsMechanic(User.Id))
            {
                return Error("Mechanics cannot add cars.");
            }

            return View();
        }

        [Authorize]
        [HttpPost]
        public HttpResponse Add(AddCarFormModel model)
        {
            var modelErrors = validator.ValidateCar(model);

            if (modelErrors.Any())
            {
                return Error(modelErrors);
            }

            var car = new Car
            {
                Model = model.Model,
                Year = model.Year,
                PictureUrl = model.Image,
                PlateNumber = model.PlateNumber,
                OwnerId = User.Id
            };

            data.Cars.Add(car);
            data.SaveChanges();

            return Redirect("/Cars/All");
        }
    }
}
