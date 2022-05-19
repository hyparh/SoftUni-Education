namespace MyWebServer.Http
{
    using MyWebServer.Common;
    using MyWebServer.Http.Collections;
    using System;
    using System.Linq;
    using System.Text;

    public class HttpResponse
    {
        public HttpResponse(HttpStatusCode statusCode)
        {
            StatusCode = statusCode;

            Headers.Add(HttpHeader.Server, "My Web Server");
            Headers.Add(HttpHeader.Date, $"{DateTime.UtcNow:r}");
        }

        public HttpStatusCode StatusCode { get; protected set; }

        public HeaderCollection Headers { get; } = new();

        public CookieCollection Cookies { get; } = new();

        public byte[] Content { get; protected set; }

        public bool HasContent => Content != null && Content.Any();

        public static HttpResponse ForError(string message)
            => new HttpResponse(HttpStatusCode.InternalServerError)
                .SetContent(message, HttpContentType.PlainText);

        public HttpResponse SetContent(string content, string contentType)
        {
            Guard.AgainstNull(content, nameof(content));
            Guard.AgainstNull(content, nameof(contentType));

            var contentLength = Encoding.UTF8.GetByteCount(content).ToString();

            Headers.Add(HttpHeader.ContentType, contentType);
            Headers.Add(HttpHeader.ContentLength, contentLength);

            Content = Encoding.UTF8.GetBytes(content);

            return this;
        }

        public HttpResponse SetContent(byte[] content, string contentType)
        {
            Guard.AgainstNull(content, nameof(content));
            Guard.AgainstNull(content, nameof(contentType));

            Headers.Add(HttpHeader.ContentType, contentType);
            Headers.Add(HttpHeader.ContentLength, content.Length.ToString());

            Content = content;

            return this;
        }

        public override string ToString()
        {
            var result = new StringBuilder();

            result.AppendLine($"HTTP/1.1 {(int)StatusCode} {StatusCode}");

            foreach (var header in Headers)
            {
                result.AppendLine(header.ToString());
            }

            foreach (var cookie in Cookies)
            {
                result.AppendLine($"{HttpHeader.SetCookie}: {cookie}");
            }

            if (HasContent)
            {
                result.AppendLine();
            }

            return result.ToString();
        }
    }
}
