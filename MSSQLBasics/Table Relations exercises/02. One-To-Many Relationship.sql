create table Manufacturers
(
	ManufacturerID int primary key identity not null,
	[Name] varchar(50) not null,
	EstablishedOn date not null
)

create table Models
(
	ModelID int primary key identity(101,1) not null,
	[Name] varchar(50) not null,
	ManufacturerID int foreign key references Manufacturers(ManufacturerID) not null
)

insert into Manufacturers([Name], EstablishedOn) values

	('BMW', '03/07/2000'),
	('Tesla', '01/03/1966'),
	('Lada', '03/06/1999')

insert into Models([Name], ManufacturerID) values

	('X1', 1),
	('i6', 1),
	('Model S', 2),
	('Model X', 2),
	('Model 3', 2),
	('Lada Nova', 3)