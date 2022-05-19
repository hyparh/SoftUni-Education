using System.Collections.Generic;

namespace BookShop.Data.Models
{
    public class Author
    {
        public Author()
        {
            AuthorsBooks = new HashSet<AuthorBook>();
        }
        
        public int Id { get; set; }
        
        public string FirstName { get; set; }
        
        public string LastName { get; set; }
        
        public string Phone { get; set; }
        
        public string Email { get; set; }        
        
        public virtual ICollection<AuthorBook> AuthorsBooks { get; set; }
    }
}
