using Microsoft.AspNetCore.Mvc;

namespace KenovServer.Controllers
{
    public class AccountController : Controller
    {
        // /account/login
        public IActionResult Login()
        {
            Response.Cookies.Append("Authentication", "hyparh");
            return View();
        }
    }
}
