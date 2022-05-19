using Panda.Services;
using Panda.Web.ViewModels.Users;
using SIS.MvcFramework;
using SIS.MvcFramework.Attributes;
using SIS.MvcFramework.Attributes.Security;
using SIS.MvcFramework.Result;

namespace Panda.Web.Controllers
{
    public class UsersController : Controller
    {
        private readonly IUsersService usersService;

        public UsersController(IUsersService usersService)
        {
            this.usersService = usersService;
        }

        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Login(LoginInputModel input)
        {
            if (!ModelState.IsValid)
            {
                return Redirect("/Users/Login");
            }

            var user = usersService.GetUserOrNull(input.Username, input.Password);

            if (user == null)
            {
                return Redirect("/Users/Login");
            }

            SignIn(user.Id, user.Username, user.Email);

            return Redirect("/");
        }

        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Register(RegisterInputModel input)
        {
            if (!ModelState.IsValid)
            {
                return Redirect("/Users/Register");
            }

            if (input.Password != input.ConfirmPassword)
            {
                return Redirect("/Users/Register");
            }

            var userId = usersService.CreateUser(input.Username, input.Email, input.Password);
            SignIn(userId, input.Username, input.Email);

            return Redirect("/");
        }

        [Authorize] //very useful attribute, we don't have to check with if-else if the user is logged in
        public IActionResult Logout()
        {
            SignOut();

            return Redirect("/");
        }
    }
}
