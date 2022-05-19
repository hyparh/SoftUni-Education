namespace MyWebServer.Http
{
    using MyWebServer.Common;
    using System.Collections.Generic;

    public class HttpSession
    {
        public const string SessionCookieName = "MyWebServerSID";

        private Dictionary<string, string> data;

        public HttpSession(string id)
        {
            Guard.AgainstNull(id, nameof(id));

            Id = id;

            data = new Dictionary<string, string>();
        }

        public string Id { get; init; }

        public bool IsNew { get; set; }

        public int Count => data.Count;

        public string this[string key]
        {
            get => data[key];
            set => data[key] = value;
        }

        public bool Contains(string key)
            => data.ContainsKey(key);

        public void Remove(string key)
        {
            if (data.ContainsKey(key))
            {
                data.Remove(key);
            }
        }
    }
}
