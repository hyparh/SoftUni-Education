namespace FootballManager.Data
{
    public class DataConstants
    {
        public const int IdMaxLength = 40;
        public const int UserMinLength = 5;
        public const int UserMaxLength = 20;
        public const int EmailMinLength = 10;
        public const int EmailMaxLength = 60;
        public const int PasswordMinLength = 5;
        public const int PasswordMaxLength = 20;
        public const string UserEmailRegularExpression = @"^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$";

        public const int FullNameMinLength = 5;
        public const int FullNameMaxLength = 80;
        public const int PositionMinLength = 5;
        public const int PositionMaxLength = 20;
        public const int EnduranceMinLength = 0;
        public const int EnduranceMaxLength = 10;
        public const int SpeedMinLength = 0;
        public const int SpeedMaxLength = 10;
        public const int DescriptionMaxLength = 200;
        public const string UrlRegularExpression = @"^(http[s]?:\/\/(www\.)?|ftp:\/\/(www\.)?|www\.){1}([0-9A-Za-z-\.@:%_\+~#=]+)+((\.[a-zA-Z]{2,3})+)(\/(.)*)?(\?(.)*)?";        
    }
}
