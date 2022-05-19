using System;
using System.ComponentModel.DataAnnotations;

namespace CarShop.Data.Models
{
    using static DataConstants;

    public class Issue
    {
        [Key]
        [Required]
        [MaxLength(GuidMaxLength)]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public string Description { get; set; } //set is good to be init in the newer version

        public bool IsFixed { get; set; }

        [Required]
        public string CarId { get; set; } //foreign key
        public Car Car { get; set; }
    }
}
