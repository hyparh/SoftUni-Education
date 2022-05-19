using FootballManager.Models.Players;
using FootballManager.Models.Users;
using System.Collections.Generic;

namespace FootballManager.Services
{
    public interface IValidator
    {
        ICollection<string> ValidateUser(RegisterUserFormModel model);

        ICollection<string> ValidatePlayer(AddPlayerFormModel model);        
    }
}
