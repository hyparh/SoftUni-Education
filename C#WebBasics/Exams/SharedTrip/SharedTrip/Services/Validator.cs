using SharedTrip.Data;
using SharedTrip.Models.Trips;
using SharedTrip.Models.Users;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace SharedTrip.Services
{
    using static DataConstants;

    public class Validator : IValidator
    {        
        public ICollection<string> ValidateUser(RegisterUserFormModel model)
        {
            var errors = new List<string>();

            if (model.Username == null || model.Username.Length < UsernameMinLength || model.Username.Length > UsernameMaxLength)
            {
                errors.Add($"Username '{model.Username}' is not valid. It must be between {UsernameMinLength} and {UsernameMaxLength} characters long.");
            }

            if (model.Email == null || !Regex.IsMatch(model.Email, UserEmailRegex))
            {
                errors.Add($"Email {model.Email} is not a valid e-mail address.");
            }

            if (model.Password == null || model.Password.Length < PasswordMinLength || model.Password.Length > PasswordMaxLength)
            {
                errors.Add($"The provided password is not valid. It must be between {PasswordMinLength} and {PasswordMaxLength} characters long.");
            }

            if (model.Password == null || model.Password.Any(x => x == ' '))
            {
                errors.Add($"The provided password cannot contain whitespaces.");
            }

            if (model.Password == null || model.Password != model.ConfirmPassword)
            {
                errors.Add($"Password and its confirmation are different.");
            }

            return errors;
        }

        public ICollection<string> ValidateTrip(AddTripFormModel model, bool IsDateValid)
        {
            var errors = new List<string>();

            if (model.Description == null || model.Description.Length > DescriptionMaxLength)
            {
                errors.Add($"Description is not valid. It must be between 0 and {DescriptionMaxLength} characters long.");
            }

            if (model.Seats > MaxSeats || model.Seats < MinSeats)
            {
                errors.Add($"Number of seats is not valid. It must be between {MinSeats} and {MaxSeats}.");
            }

            if (!IsDateValid)
            {
                errors.Add($"Date must be in the following format: {DateTimeFormat}.");
            }

            if (string.IsNullOrWhiteSpace(model.ImagePath) || !Regex.IsMatch(model.ImagePath, UrlRegex))
            {
                errors.Add($"Invalid image path.");
            }

            return errors;
        }
    }
}
