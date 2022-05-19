CREATE TABLE [Users]
(	
	[Id] BIGINT PRIMARY KEY IDENTITY,
	[Username] VARCHAR(30) NOT NULL UNIQUE,
	[Password] VARCHAR(26) NOT NULL,
	[ProfilePicture] VARCHAR(MAX),
	[LastLoginTime] DATETIME2, --???
	[IsDeleted] BIT
)

INSERT INTO [Users]
(
	[Username], 
	[Password], 
	[ProfilePicture], 
	[LastLoginTime], 
	[IsDeleted]
)
VALUES
('hyparh', 'pass123', 'https://www.britannica.com/science/solar-flare', '01/12/2021', 0),
('pesho', 'pesho123', 'https://www.britannica.com/science/solar-flare', '06/28/2021', 0),
('gosho', 'gosho123', 'https://www.britannica.com/science/solar-flare', '05/22/2021', 0),
('stoyan', 'stoyan123', 'https://www.britannica.com/science/solar-flare', '04/11/2021', 0),
('cane', 'cane123', 'https://www.britannica.com/science/solar-flare', '05/03/2021', 0)