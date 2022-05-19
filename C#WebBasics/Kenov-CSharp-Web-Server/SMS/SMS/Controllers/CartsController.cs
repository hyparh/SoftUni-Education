using MyWebServer.Controllers;
using MyWebServer.Http;
using SMS.Data;
using SMS.Models.Carts;
using System.Linq;

namespace SMS.Controllers
{
    public class CartsController : Controller
    {
        private readonly SMSDbContext data;       

        public CartsController(SMSDbContext data)
        {
            this.data = data;            
        }

        [Authorize]
        public HttpResponse AddProduct(string productId)
        {
            var user = data.Users.FirstOrDefault(u => u.Id == User.Id);

            user.Cart = data.Carts.FirstOrDefault(c => c.Id == user.CartId);

            var product = data.Products.FirstOrDefault(c => c.Id == productId);

            product.Cart = user.Cart;
            product.CartId = user.CartId;

            user.Cart.Products.Add(product);
            data.SaveChanges();

            return Redirect("/Carts/Details");
        }
        
        [Authorize]       
        public HttpResponse Details()
        {
            var details = data.Products
                .Where(p => p.Id == User.Id)
                .OrderByDescending(c => c.Id)
                .Select(p => new DetailsViewModel
                {                    
                    Name = p.Name,
                    Price = p.Price
                })
                .ToList();

            return View(details);
        }

        [Authorize]
        public HttpResponse Buy(string productId)
        {
            var user = data.Users.FirstOrDefault(u => u.Id == User.Id);

            user.Cart = data.Carts.FirstOrDefault(c => c.Id == user.CartId);

            var product = data.Products.FirstOrDefault(c => c.Id == productId);            

            user.Cart.Products.Clear();
            data.SaveChanges();

            return Redirect("/");
        }
    }
}
