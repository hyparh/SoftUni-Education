using FootballManager.Data;
using FootballManager.Models.Players;
using FootballManager.Models.Users;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace FootballManager.Services
{
    using static DataConstants;

    public class Validator : IValidator
    {        
        public ICollection<string> ValidateUser(RegisterUserFormModel user)
        {
            var errors = new List<string>();

            if (user.Username == null || user.Username.Length < UserMinLength || user.Username.Length > UserMaxLength)
            {
                errors.Add($"Username '{user.Username}' is not valid. It must be between {UserMinLength} and {UserMaxLength} characters long.");
            }

            if (user.Email == null || !Regex.IsMatch(user.Email, UserEmailRegularExpression))
            {
                errors.Add($"Email '{user.Email}' is not a valid e-mail address.");
            }

            if (user.Email.Length < EmailMinLength || user.Email.Length > EmailMaxLength)
            {
                errors.Add($"The provided email is not valid. It must be between {EmailMinLength} and {EmailMaxLength} characters long.");
            }

            if (user.Password == null || user.Password.Length < PasswordMinLength || user.Password.Length > PasswordMaxLength)
            {
                errors.Add($"The provided password is not valid. It must be between {PasswordMinLength} and {PasswordMaxLength} characters long.");
            }

            if (user.Password != null && user.Password.Any(x => x == ' '))
            {
                errors.Add($"The provided password cannot contain whitespaces.");
            }

            if (user.Password != user.ConfirmPassword)
            {
                errors.Add("Password and its confirmation are different.");
            }           

            return errors;
        }

        public ICollection<string> ValidatePlayer(AddPlayerFormModel player)
        {
            var errors = new List<string>();

            if (player.FullName == null || player.FullName.Length < FullNameMinLength || player.FullName.Length > FullNameMaxLength)
            {
                errors.Add($"Username '{player.FullName}' is not valid. It must be between {FullNameMinLength} and {FullNameMaxLength} characters long.");
            }

            if (player.Position == null || player.Position.Length < PositionMinLength || player.Position.Length > PositionMaxLength)
            {
                errors.Add($"The provided position is not valid. It must be between {PositionMinLength} and {PositionMaxLength} characters long.");
            }

            if (player.ImageUrl == null || !Regex.IsMatch(player.ImageUrl, UrlRegularExpression))
            {
                errors.Add($"Image url is not valid.");
            }

            if (player.Endurance < EnduranceMinLength || player.Endurance > EnduranceMaxLength)
            {
                errors.Add($"The provided endurance is not valid. It must be between {EnduranceMinLength} and {EnduranceMaxLength}.");
            }

            if (player.Speed < SpeedMinLength || player.Speed > SpeedMaxLength)
            {
                errors.Add($"The provided speed is not valid. It must be between {SpeedMinLength} and {SpeedMaxLength}.");
            }

            return errors;
        }
    }
}
