using KenovServer.Data;
using KenovServer.Models;
using Microsoft.AspNetCore.Mvc;

namespace KenovServer.Controllers
{
    // /cats/list
    public class CatsController : Controller
    {
        private readonly DbContext data;

        public CatsController()
        {
            data = new DbContext();
        }

        public IActionResult List()
        {
            var cats = data
                .AllCats()
                .Select(c => new CatModel 
                {
                    Name = c.Name,
                    Age = c.Age,
                    Owner = c.Owner.Name
                })
                .ToList();

            //if (!cats.Any())
            //{
            //    return NotFound();
            //}

            return View(); //this means return HTML
        }

        // /cats/search
        public IActionResult Search()
        {
            return View();
        }
    }
}
