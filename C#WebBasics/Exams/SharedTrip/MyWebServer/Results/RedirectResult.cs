namespace MyWebServer.Results
{
    using MyWebServer.Http;

    public class RedirectResult : ActionResult
    {
        public RedirectResult(HttpResponse response, string location)
            : base(response)
        {
            StatusCode = HttpStatusCode.Found;

            Headers.Add(HttpHeader.Location, location);
        }
    }
}
