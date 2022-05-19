using Andreys.Services;
using Andreys.ViewModels.Users;
using SIS.HTTP;
using SIS.MvcFramework;

namespace Andreys.Controllers
{
    public class UsersController : Controller
    {
        private readonly IUsersService usersService;

        public UsersController(IUsersService usersService)
        {
            this.usersService = usersService;
        }

        public HttpResponse Login()
        {
            if (IsUserLoggedIn())
            {
                return Redirect("/");
            }

            return View();
        }

        [HttpPost]
        public HttpResponse Login(LoginInputModel input)
        {
            var userId = usersService.GetUserId(input.Username, input.Password);

            if (userId != null)
            {
                SignIn(userId);
                return Redirect("/");
            }

            return Redirect("/Users/Login");
        }

        public HttpResponse Register()
        {
            if (IsUserLoggedIn())
            {
                return Redirect("/");
            }

            return View();
        }

        [HttpPost]
        public HttpResponse Register(RegisterInputModel input)
        {
            if (input.Password.Length < 6 || input.Password.Length > 20)
            {
                return View();
            }

            if (input.Username.Length < 4 || input.Username.Length > 10)
            {
                return View();
            }

            if (input.Password != input.ConfirmPassword)
            {
                return View();
            }

            if (usersService.EmailExists(input.Email))
            {
                return View();
            }

            if (usersService.UsernameExists(input.Username))
            {
                return View();
            }

            usersService.Register(input.Username, input.Email, input.Password);

            return Redirect("/Users/Login");
        }

        public HttpResponse Logout()
        {
            if (!IsUserLoggedIn())
            {
                return Redirect("/Users/Login");
            }

            SignOut();

            return Redirect("/");
        }
    }
}
