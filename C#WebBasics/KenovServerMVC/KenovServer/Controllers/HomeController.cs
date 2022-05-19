using KenovServer.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace KenovServer.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult English()
        {
            Response.Cookies.Append("language", "en");

            return RedirectToAction(nameof(Index));
        }

        public IActionResult Bulgarian()
        {
            Response.Cookies.Append("language", "bg");

            return RedirectToAction(nameof(Index));
        }
    }
}