using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Panda.Data.Models
{
    public class User
    {
        public User()
        {
            Id = Guid.NewGuid().ToString(); //this is because our Id is GUID
            Packages = new HashSet<Package>();
            Receipts = new HashSet<Receipt>();
        }

        [Key]
        public string Id { get; set; }

        [Required]
        [MaxLength(20)]
        public string Username { get; set; }

        [Required]
        [MaxLength(20)]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public virtual ICollection<Package> Packages { get; set; }

        public virtual ICollection<Receipt> Receipts { get; set; }
    }
}
