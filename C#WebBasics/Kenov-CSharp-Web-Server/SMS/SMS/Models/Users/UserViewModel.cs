using System.Collections.Generic;

namespace SMS.Models.Users
{
    public class UserViewModel
    {
        public string Username { get; init; }

        public IEnumerable<Product> Products { get; init; }
    }
}
