ALTER TABLE [Users]
DROP CONSTRAINT PK_UsersCompositeIdUsername

ALTER TABLE [Users]
ADD CONSTRAINT PK_Id PRIMARY KEY (Id)

ALTER TABLE [Users]
ADD CONSTRAINT CH_UsernameIsAtleast3Symbols CHECK (LEN([Username]) > 3)