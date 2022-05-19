create table Passports 
(
	[PassportID] int primary key not null, 
	[PassportNumber] char(8) not null
)

create table Persons 
(
	[PersonID] int primary key identity not null, 
	[FirstName] varchar(50) not null,
	[Salary] decimal(9, 2) not null,
	[PassportID] int foreign key references Passports(PassportID) unique not null
)

insert into Passports(PassportID, PassportNumber) values
	(101, 'N34FG21B'),
	(102, 'K65LO4R7'),
	(103, 'ZE657QP2')

insert into Persons(FirstName, Salary, PassportID) values
	('Roberto', 43300.00, 102),
	('Tom', 56100.00, 103),
	('Yana', 60200.00, 101)

