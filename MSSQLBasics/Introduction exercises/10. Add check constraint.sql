ALTER TABLE [Users]
ADD CONSTRAINT CH_PasswordIsAtleast5Symbols CHECK (LEN([Password]) > 5)