namespace MyWebServer.Results
{
    using MyWebServer.Http;

    public class ContentResult : ActionResult
    {
        public ContentResult(
            HttpResponse response,
            string content, 
            string contentType)
            : base(response) 
            => SetContent(content, contentType);
    }
}
