﻿namespace Andreys.App.Controllers
{
    using Andreys.Services;
    using SIS.HTTP;
    using SIS.MvcFramework;

    public class HomeController : Controller
    {
        private readonly IProductsService productsService;

        public HomeController(IProductsService productsService)
        {
            this.productsService = productsService;
        }

        [HttpGet("/")]
        public HttpResponse IndexSlash()
        {
            return Index();
        }

        public HttpResponse Index()
        {
            if (IsUserLoggedIn())
            {
                var allProducts = productsService.GetAll();

                return View(allProducts, "Home");
            }

            return View();
        }
    }
}
