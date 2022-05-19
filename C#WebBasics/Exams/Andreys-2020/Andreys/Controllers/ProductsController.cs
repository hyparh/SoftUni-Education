using Andreys.Services;
using Andreys.ViewModels.Products;
using SIS.HTTP;
using SIS.MvcFramework;

namespace Andreys.Controllers
{
    internal class ProductsController : Controller
    {
        private readonly IProductsService productsService;

        public ProductsController(IProductsService productsService)
        {
            this.productsService = productsService;
        }

        public HttpResponse Add()
        {
            // here we check out if the user is logged in
            if (!IsUserLoggedIn())
            {
                return Redirect("/Users/Login");
            }

            return View();
        }

        [HttpPost]
        public HttpResponse Add(ProductAddInputModel inputModel)
        {            
            if (!IsUserLoggedIn())
            {
                return Redirect("/Users/Login");
            }

            //validation for the Name property
            if (inputModel.Name.Length < 4 || inputModel.Name.Length > 20)
            {
                return View();
            }

            if (string.IsNullOrEmpty(inputModel.Description) || inputModel.Description.Length > 10)
            {
                return View();
            }

            var productId = productsService.Add(inputModel);

            return Redirect($"/Products/Details?id={productId}");
        }

        //this is responisble for Details section
        public HttpResponse Details(int id)
        {
            if (!IsUserLoggedIn())
            {
                return Redirect("/Users/Login");
            }

            var product = productsService.GetById(id);

            return View(product);
        }

        //this is responisble for Delete section
        public HttpResponse Delete(int id)
        {
            if (!IsUserLoggedIn())
            {
                return Redirect("/Users/Login");
            }

            productsService.DeleteById(id);

            return Redirect("/");
        }
    }
}
