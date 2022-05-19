namespace MyWebServer.Controllers
{
    using System;
    using MyWebServer.Http;

    [AttributeUsage(AttributeTargets.Method)]
    public abstract class HttpMethodAttribute : Attribute
    {
        protected HttpMethodAttribute(HttpMethod httpMethod)
            => HttpMethod = httpMethod;

        public HttpMethod HttpMethod { get; }
    }
}
