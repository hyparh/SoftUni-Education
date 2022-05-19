namespace MyWebServer.Http
{
    using MyWebServer.Common;

    public class HttpCookie
    {
        public HttpCookie(string name, string value)
        {
            Guard.AgainstNull(name, nameof(name));
            Guard.AgainstNull(value, nameof(value));

            Name = name;
            Value = value;
        }

        public string Name { get; init; }

        public string Value { get; private set; }

        public override string ToString()
            => $"{Name}={Value}";
    }
}
