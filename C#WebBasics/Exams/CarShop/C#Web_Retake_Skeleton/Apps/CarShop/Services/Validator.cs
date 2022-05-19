using CarShop.Data.Models.Users;
using System.Text.RegularExpressions;

namespace CarShop.Services
{
    using static Data.DataConstants;

    public class Validator : IValidator
    {
        public bool ValidateUserRegistration(RegisterUserFormModel model)
        {
            if (model.Username.Length < UserMinUsername || model.Username.Length > DefaultMaxLength)
            {
                return false;
            }

            //this Email validation is not mandatory unless it is stated that it must be validated
            if (Regex.IsMatch(model.Email, @"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$"))
            {
                return false;
            }

            if (model.Password.Length < UserMinPassword || model.Password.Length > DefaultMaxLength)
            {
                return false;
            }

            if (model.UserType != UserTypeClient || model.UserType != UserTypeMechanic)
            {
                return false;
            }

            return true;
        }
    }
}
