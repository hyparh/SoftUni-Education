using Microsoft.AspNetCore.Mvc;

namespace KenovServer.Controllers
{
    public class DateTimeController : Controller
    {
        // /DateTime/Now
        public IActionResult Now()
        {
            var storedDate = HttpContext.Session.GetString("Current date");

            if (storedDate is null)
            {
                storedDate = DateTime.Now.ToString();

                HttpContext.Session.SetString("Current date", storedDate);
            }

            return Ok(storedDate);
        }
    }
}
