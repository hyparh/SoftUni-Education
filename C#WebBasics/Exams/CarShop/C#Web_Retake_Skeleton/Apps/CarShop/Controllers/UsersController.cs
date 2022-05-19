using CarShop.Data.Models.Users;
using CarShop.Services;
using SUS.HTTP;
using SUS.MvcFramework;

namespace CarShop.Controllers
{
    public class UsersController : Controller
    {
        private readonly IValidator validator;

        public UsersController(IValidator validator)
        {
            this.validator = validator;
        }

        public HttpResponse Register() => View();

        [HttpPost]
        public HttpResponse Register(RegisterUserFormModel model)
        {
            if (validator.ValidateUserRegistration(model))
            {
                return Bad
            }
        }
    }
}
