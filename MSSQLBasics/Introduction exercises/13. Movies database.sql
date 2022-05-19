CREATE DATABASE [Movies]

CREATE TABLE [Directors]
(	
	[Id] INT PRIMARY KEY,
	[DirectorName] VARCHAR(50) NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Directors] (Id, DirectorName, Notes) VALUES
(1, 'Stamo', 'някакви си неща'),
(2, 'Petar', 'drugi zapiski'),
(3, 'Goro', 'zapissssski'),
(4, 'Kano', 'za fdfhgh wfrtr'),
(5, 'Kung-Lao', 'vvv bbb nnn')

CREATE TABLE [Genres]
(	
	[Id] INT PRIMARY KEY,
	[GenreName] VARCHAR(30) NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Genres] (Id, GenreName, Notes) VALUES
(1, 'horror', 'някакви си неща'),
(2, 'comedy', 'drugi zapiski'),
(3, 'thriller', 'zapissssski'),
(4, 'drama', 'za fdfhgh wfrtr'),
(5, 'thriller', 'vvv bbb nnn')

CREATE TABLE [Categories]
(	
	[Id] INT PRIMARY KEY,
	[CategoryName] VARCHAR(30) NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Categories] (Id, CategoryName, Notes) VALUES
(1, 'horror', 'някакви си неща'),
(2, 'comedy', 'drugi zapiski'),
(3, 'thriller', 'zapissssski'),
(4, 'drama', 'za fdfhgh wfrtr'),
(5, 'thriller', 'vvv bbb nnn')

CREATE TABLE [Movies]
(	
	[Id] INT PRIMARY KEY,
	[Title] VARCHAR(30) NOT NULL,
	[DirectorId] INT NOT NULL,
	[CopyrightYear] INT NOT NULL,
	[Length] INT NOT NULL,
	[GenreId] INT NOT NULL,
	[CategoryId] INT NOT NULL,
	[Rating] DECIMAL(2, 1) NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Movies] (Id, Title, DirectorId, CopyrightYear, [Length], 
GenreId, CategoryId, Rating, Notes) VALUES
(1, 'Baskervil dog', 3, 1986, 163, 7, 4, 7.7, 'nqkakvi notes'),
(2, 'Aliens', 3, 1986, 188, 6, 3, 8.5, 'bb77ttu uu'),
(3, 'Liar Liar', 5, 1997, 130, 8, 7, 6.9, '878787 999'),
(4, 'Avengers', 3, 1986, 134, 1, 8, 7.2, '..00..'),
(5, 'Terminator', 3, 1984, 163, 7, 4, 8.4, '666 777 111 000')
