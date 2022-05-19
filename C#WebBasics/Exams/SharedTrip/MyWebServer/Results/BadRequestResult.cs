namespace MyWebServer.Results
{
    using MyWebServer.Http;

    public class BadRequestResult : ActionResult
    {
        public BadRequestResult(HttpResponse response) 
            : base(response)
            => StatusCode = HttpStatusCode.BadRequest;
    }
}
