CREATE DATABASE [CarRental]

CREATE TABLE [Categories]
(	
	[Id] INT PRIMARY KEY,
	[CategoryName] VARCHAR(30) NOT NULL,
	[DailyRate] INT NOT NULL,
	[WeeklyRate] INT NOT NULL,
	[MonthlyRate] INT NOT NULL,
	[WeekendRate] INT NOT NULL,	
)

INSERT INTO [Categories] (Id, CategoryName, DailyRate, WeeklyRate, MonthlyRate, WeekendRate) VALUES
(1, 'sedan', 3, 21, 163, 7),
(2, 'coupe', 4, 34, 188, 8),
(3, 'minivan', 5, 36, 196, 9)

CREATE TABLE [Cars]
(	
	[Id] INT PRIMARY KEY,
	[PlateNumber] VARCHAR(30) NOT NULL,
	[Manufacturer] CHAR(50) NOT NULL,
	[Model] CHAR(50) NOT NULL,
	[CarYear] INT NOT NULL,
	[CategoryId] INT NOT NULL,	
	[Doors] INT NOT NULL,
	[Picture] VARBINARY(MAX),
	[Condition] CHAR(50) NOT NULL,
	[Available] CHAR(4) CONSTRAINT TWO_LETTERS CHECK ([Available] IN ('yes', 'no')) NOT NULL
)

INSERT INTO [Cars] (Id, PlateNumber, Manufacturer, Model, CarYear, CategoryId,
Doors, Picture, Condition, Available) VALUES
(1, 'es6567oo', 'BMW', 'model1', 2002, 3, 4, NULL, 'almost new', 'yes'),
(2, 'fr8755pp', 'Seat', 'model2', 2003, 12, 4, NULL, 'old', 'no'),
(3, 'ff8770pl', 'Volkswagen', 'model3', 2004, 10, 4, NULL, 'brand new', 'yes')

CREATE TABLE [Employees]
(	
	[Id] INT PRIMARY KEY,
	[FirstName] NVARCHAR(30) NOT NULL,
	[LastName] CHAR(50) NOT NULL,
	[Title] CHAR(50) NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Employees] (Id, FirstName, LastName, Title, Notes) VALUES
(1, 'Milen', 'Florov', 'product manager', 'notezz notezzzz'),
(2, 'Nia', 'Yordanova', 'sales manager', 'notezz notezzzz'),
(3, 'Kristina', 'Velikova', 'secretary', 'notezz notezzzz')

CREATE TABLE [Customers]
(	
	[Id] INT PRIMARY KEY,
	[DriverLicenceNumber] BIGINT NOT NULL,
	[FullName] CHAR(50) NOT NULL,
	[Address] CHAR(50) NOT NULL,
	[City] CHAR(50) NOT NULL,
	[ZIPCode] INT NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Customers] (Id, DriverLicenceNumber, FullName, [Address], City, ZIPCode, Notes) VALUES
(1, 1234567890987654321, 'Nikolai Hadjiyski', 'sdf67 gt', 'Sofia', 1000, 'notezzz'),
(2, 1234567897787654321, 'Ivan Damianov', 'hgfh87 kk', 'Sofia', 1000, 'notezzz'),
(3, 1234576890987654321, 'Hristian Georgiev', 'sdfh78 kl', 'Sofia', 1000, 'notezzz')

CREATE TABLE [RentalOrders]
(	
	[Id] INT PRIMARY KEY,
	[EmployeeId] INT NOT NULL,
	[CustomerId] INT NOT NULL,
	[CarId] INT NOT NULL,
	[TankLevel] INT NOT NULL,
	[KilometrageStart] INT NOT NULL,
	[KilometrageEnd] INT NOT NULL,
	[TotalKilometrage] BIGINT NOT NULL,
	[StartDate] DATETIME2,
	[EndDate] DATETIME2,
	[TotalDays] INT NOT NULL,
	[RateApplied] INT NOT NULL,
	[TaxRate] INT NOT NULL,
	[OrderStatus] CHAR(11) CONSTRAINT TWO_WORDS CHECK ([OrderStatus] IN ('ordered', 'not ordered')) NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [RentalOrders] (Id, EmployeeId, CustomerId, CarId, TankLevel, KilometrageStart
, KilometrageEnd, TotalKilometrage, StartDate, EndDate, TotalDays, RateApplied
, TaxRate, OrderStatus, Notes) VALUES
(1, 2, 3, 4, 5, 120, 3000, 120000, '03/08/2007', '03/12/2007', 790, 20, 10, 'ordered', 'notezzz'),
(2, 3, 4, 5, 6, 80, 5000, 88000, '06/06/2020', '03/12/2021', 1300, 24, 11, 'not ordered', 'notezzz'),
(3, 4, 5, 6, 7, 90, 4400, 76000, '03/07/2013', '03/08/2014', 999, 44, 7, 'ordered', 'notezzz')