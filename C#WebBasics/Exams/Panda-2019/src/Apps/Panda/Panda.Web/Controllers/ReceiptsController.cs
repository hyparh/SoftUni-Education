using Panda.Services;
using Panda.Web.ViewModels.Receipts;
using SIS.MvcFramework;
using SIS.MvcFramework.Attributes.Security;
using SIS.MvcFramework.Result;
using System.Linq;

namespace Panda.Web.Controllers
{
    public class ReceiptsController : Controller
    {
        private readonly IReceiptsService receiptsService;

        public ReceiptsController(IReceiptsService receiptsService)
        {
            this.receiptsService = receiptsService;
        }

        [Authorize]
        public IActionResult Index()
        {
            var viewModel = receiptsService.GetAll().Select(
                x => new ReceiptViewModel
                {
                    Id = x.Id,
                    Fee = x.Fee,
                    IssuedOn = x.IssuedOn,
                    RecipientName = x.Recipient.Username,
                })
                .ToList();

            return View(viewModel);
        }
    }
}
