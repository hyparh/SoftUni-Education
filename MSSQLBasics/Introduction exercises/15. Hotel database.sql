CREATE DATABASE Hotel

CREATE TABLE [Employees]
(	
	[Id] INT PRIMARY KEY,
	[FirstName] NVARCHAR(30) NOT NULL,
	[LastName] CHAR(50) NOT NULL,
	[Title] CHAR(50) NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Employees] (Id, FirstName, LastName, Title, Notes) VALUES
(1, 'Pesho', 'Peshev', 'product manager', 'notezz notezzzz'),
(2, 'Ivan', 'Ivanov', 'sales manager', 'notezz notezzzz'),
(3, 'Cane', 'Taskov', 'worker', 'notezz notezzzz')

CREATE TABLE [Customers]
(	
	[AccountNumber] INT PRIMARY KEY,
	[FirstName] BIGINT NOT NULL,
	[LastName] CHAR(50) NOT NULL,
	[PhoneNumber] CHAR(50) NOT NULL,
	[EmergencyName] CHAR(50) NOT NULL,
	[EmergencyNumber] INT NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Customers] (AccountNumber, FirstName, LastName, PhoneNumber,
EmergencyName, EmergencyNumber, Notes) VALUES
(1, 1234567890987654321, 'Koicho Koichev', 'sdf67 gt', 'Sofia', 1000, 'notezzz'),
(2, 1234567897787654321, 'Ivan Stoyanov', 'hgfh87 kk', 'Elin Pelin', 2100, 'notezzz'),
(3, 1234576890987654321, 'Hristian Hristianov', 'sdfh78 kl', 'Novi han', 2110, 'notezzz')

CREATE TABLE [RoomStatus]
(	
	[RoomStatus] VARCHAR(20) NOT NULL, --no primary key?
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [RoomStatus] (RoomStatus, Notes) VALUES
('free', 'notezzz'),
('occupied', 'notezzz'),
('cleaning', 'notezzz')

CREATE TABLE [RoomTypes]
(	
	[RoomType] VARCHAR(20) NOT NULL, --no primary key?
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [RoomTypes] (RoomType, Notes) VALUES
('Apartment', 'notezzz'),
('Studio', 'notezzz'),
('Maisonette', 'notezzz')

CREATE TABLE [BedTypes]
(	
	[BedType] VARCHAR(20) NOT NULL, --no primary key?
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [BedTypes] (BedType, Notes) VALUES
('Single', 'notezzz'),
('Bedroom', 'notezzz'),
('Couch', 'notezzz')

CREATE TABLE [Rooms]
(	
	[RoomNumber] INT PRIMARY KEY,
	[RoomType] VARCHAR(20) NOT NULL,
	[BedType] VARCHAR(20) NOT NULL,
	[Rate] INT NOT NULL,
	[RoomStatus] VARCHAR(20) NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Rooms] (RoomNumber, RoomType, BedType, Rate, RoomStatus, Notes) VALUES
(1, 'Apartment', 'double', 3, 'free', 'notezzz'),
(2, 'Maisonette', 'single', 4, 'free', 'notezzz'),
(3, 'Studio', 'couch', 5, 'free', 'notezzz')

CREATE TABLE [Payments]
(	
	[Id] INT PRIMARY KEY,
	[EmployeeId] INT NOT NULL,
	[PaymentDate] DATETIME2 NOT NULL,
	[AccountNumber] INT NOT NULL,
	[FirstDateOccupied] DATETIME2 NOT NULL,
	[LastDateOccupied] DATETIME2,
	[TotalDays] INT NOT NULL,
	[AmountCharged] DECIMAL(15, 2) NOT NULL,
	[TaxRate] INT NOT NULL,
	[TaxAmount] INT NOT NULL,
	[PaymentTotal] DECIMAL(15, 2) NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Payments] (Id, EmployeeId, PaymentDate, AccountNumber, FirstDateOccupied,
LastDateOccupied, TotalDays, AmountCharged, TaxRate, TaxAmount, PaymentTotal, Notes) VALUES
(1, 2, '12/12/2000', 3, '05/05/2001', '12/05/2001', 6, 345.3, 20, 40, 1222.5, 'notezzz'),
(2, 3, '03/04/2019', 3, '05/08/2019', '01/09/2019', 6, 345.3, 20, 50, 1000.8, 'notezzz'),
(3, 4, '12/12/2020', 3, '04/07/2020', '12/07/2020', 6, 345.3, 20, 60, 1300.4, 'notezzz')

CREATE TABLE [Occupancies]
(	
	[Id] INT PRIMARY KEY,
	[EmployeeId] INT NOT NULL,
	[DateOccupied] DATETIME2 NOT NULL,
	[AccountNumber] INT NOT NULL,
	[RoomNumber] INT NOT NULL,
	[RateApplied] INT NOT NULL,
	[PhoneCharge] DECIMAL(15, 2) NOT NULL,
	[Notes] NVARCHAR(MAX)
)

INSERT INTO [Occupancies] (Id, EmployeeId, DateOccupied, AccountNumber, RoomNumber,
RateApplied, PhoneCharge, Notes) VALUES
(1, 2, '12/12/2000', 44, 120, 6, 45.1, 'notezzz'),
(2, 3, '03/04/2019', 33, 119, 6, 5.3, 'notezzz'),
(3, 4, '12/12/2020', 22, 428, 6, 25.4, 'notezzz')
