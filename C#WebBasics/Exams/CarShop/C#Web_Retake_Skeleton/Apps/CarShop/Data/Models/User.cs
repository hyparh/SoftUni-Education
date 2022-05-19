using System;
using System.ComponentModel.DataAnnotations;

namespace CarShop.Data.Models
{
    using static DataConstants;

    public class User
    {
        [Key]
        [Required]
        [MaxLength(GuidMaxLength)]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        [MaxLength(DefaultMaxLength)]
        public string Username { get; set; } //set is good to be init in the newer version

        [Required]        
        public string Email { get; set; }

        [Required]
        [MaxLength(DefaultMaxLength)]
        public string Password { get; set; }


        public bool IsMechanic { get; set; }
    }
}
