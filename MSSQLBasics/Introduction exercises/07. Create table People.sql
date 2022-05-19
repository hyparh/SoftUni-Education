CREATE TABLE [People]
(
	[Id] INT PRIMARY KEY IDENTITY,
	[Name] VARCHAR(200) NOT NULL,
	[Picture] VARCHAR(MAX),
	[Height] FLOAT(3),
	[Weight] FLOAT(3),
	[Gender] CHAR(2) CONSTRAINT ONE_LETTER CHECK ([Gender] IN ('f', 'm')) NOT NULL,
	[Birthdate] DATETIME2 NOT NULL,
	[Biography] NVARCHAR(MAX)	
)

INSERT INTO [People]
(
	[Name],
	[Picture],
	[Height],
	[Weight],
	[Gender],
	[Birthdate],
	[Biography]
)
VALUES
('Pesho', 'https://www.britannica.com/science/solar-flare', 191, 97, 'm', '05/05/2005', 'хахохахохахоготавжа'),
('Teslo', 'https://www.britannica.com/science/solar-flare', 145, 154, 'm', '05/05/2005', 'хахохахохахоготавжа'),
('Stoyan', 'https://www.britannica.com/science/solar-flare', 177, 80, 'm', '05/05/2005', 'хахохахохахоготавжа'),
('Garaj', 'https://www.britannica.com/science/solar-flare', 173, 88, 'm', '05/05/2005', 'хахохахохахоготавжа'),
('Omir', 'https://www.britannica.com/science/solar-flare', 183, 91, 'm', '05/05/2005', 'хахохахохахоготавжа')