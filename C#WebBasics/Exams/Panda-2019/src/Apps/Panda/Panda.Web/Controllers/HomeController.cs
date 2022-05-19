using SIS.MvcFramework;
using SIS.MvcFramework.Attributes;
using SIS.MvcFramework.Result;

namespace Panda.Web.Controllers
{
    public class HomeController : Controller
    {
        // /
        [HttpGet(Url = "/")]
        public IActionResult IndexSlash()
        {
            return Index();
        }

        // /Home/Index
        public IActionResult Index()
        {
            if (IsLoggedIn())
            {
                return View("IndexLoggedIn");
            }
            else
            {
                return View();
            }
        }
    }
}
