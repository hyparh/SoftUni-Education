using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CarShop.Data.Models
{
    using static DataConstants;

    public class Car
    {        
        [Key]
        [Required]
        [MaxLength(GuidMaxLength)]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        [MaxLength(DefaultMaxLength)]
        public string Model { get; set; } //set is good to be init in the newer version

        public int Year { get; set; }

        [Required]
        public string PictureUrl { get; set; }

        [Required]
        [MaxLength(PlateNumberMaxLength)]
        public string PlateNumber { get; set; }

        [Required]
        public string OwnerId { get; set; } //this one is a foreign key
        public User Owner { get; set; }

        public IEnumerable<Issue> Issues { get; set; } = new HashSet<Issue>();
    }
}
