using System.ComponentModel.DataAnnotations;
using TeisterMask.Data.Common;

namespace TeisterMask.DataProcessor.ImportDto
{
    public class ImportEmployeeDto
    {
        [Required]
        [MinLength(GlobalConstants.USERNAME_MIN_LENGTH)]
        [MaxLength(GlobalConstants.USERNAME_MAX_LENGTH)]
        [RegularExpression(@"^[a-zA-Z0-9]+$")]
        public string Username { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [RegularExpression("^\\d{3}-\\d{3}-\\d{4}$")] // is this one right?
        public string Phone { get; set; }

        public int[] Tasks { get; set; }
    }
}
