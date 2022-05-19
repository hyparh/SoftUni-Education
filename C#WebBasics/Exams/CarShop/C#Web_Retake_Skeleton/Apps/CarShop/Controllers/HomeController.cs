using SUS.HTTP;
using SUS.MvcFramework;

namespace CarShop.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("/")]
        public HttpResponse Index()
        {
            if (IsUserSignedIn())
            {
                return Redirect("/Cars/All");
            }

            return View();
        }
    }
}
