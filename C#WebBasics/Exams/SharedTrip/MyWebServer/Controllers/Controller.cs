namespace MyWebServer.Controllers
{
    using MyWebServer.Http;
    using MyWebServer.Identity;
    using MyWebServer.Results;
    using MyWebServer.Results.Views;
    using System.Collections.Generic;
    using System.Runtime.CompilerServices;

    public abstract class Controller
    {
        public const string UserSessionKey = "AuthenticatedUserId";

        private UserIdentity userIdentity;
        private IViewEngine viewEngine;

        protected HttpRequest Request { get; init; }

        protected HttpResponse Response { get; private init; } = new HttpResponse(HttpStatusCode.OK);

        protected UserIdentity User
        {
            get
            {
                if (userIdentity == null)
                {
                    userIdentity = Request.Session.Contains(UserSessionKey)
                        ? new UserIdentity { Id = Request.Session[UserSessionKey] }
                        : new();
                }

                return userIdentity;
            }
        }

        protected IViewEngine ViewEngine
        {
            get
            {
                if (viewEngine == null)
                {
                    viewEngine = Request.Services.Get<IViewEngine>()
                        ?? new ParserViewEngine();
                }

                return viewEngine;
            }
        }

        protected void SignIn(string userId)
        {
            Request.Session[UserSessionKey] = userId;
            userIdentity = new UserIdentity { Id = userId };
        }

        protected void SignOut()
        {
            Request.Session.Remove(UserSessionKey);
            userIdentity = new();
        }

        protected ActionResult Text(string text)
            => new TextResult(Response, text);

        protected ActionResult Html(string html)
            => new HtmlResult(Response, html);

        protected ActionResult BadRequest()
            => new BadRequestResult(Response);

        protected ActionResult Unauthorized()
            => new UnauthorizedResult(Response);

        protected ActionResult NotFound()
            => new NotFoundResult(Response);

        protected ActionResult Redirect(string location)
            => new RedirectResult(Response, location);

        protected ActionResult View([CallerMemberName] string viewName = "")
            => GetViewResult(viewName, null);

        protected ActionResult View(string viewName, object model)
            => GetViewResult(viewName, model);

        protected ActionResult View(object model, [CallerMemberName] string viewName = "")
            => GetViewResult(viewName, model);

        protected ActionResult Error(string error)
            => Error(new[] { error });

        protected ActionResult Error(IEnumerable<string> errors)
            => View("./Error", errors);

        private ActionResult GetViewResult(string viewName, object model)
            => new ViewResult(Response, ViewEngine, viewName, GetType().GetControllerName(), model, User.Id);
    }
}
