using CarShop.Data.Models.Users;

namespace CarShop.Services
{
    public interface IValidator
    {
        bool ValidateUserRegistration(RegisterUserFormModel model);
    }
}
