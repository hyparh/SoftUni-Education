insert into Towns ([Name]) values
('Sofia'),
('Plovdiv'),
('Varna'),
('Burgas')

insert into Departments ([Name]) values 
('Engineering'),
('Sales'),
('Marketing'),
('Software Development'),
('Quality Assurance')

INSERT INTO Addresses (AddressText,TownId) VALUES
('Plovdiv',2)

insert into Employees ([FirstName], [MiddleName], [LastName], [JobTitle], [DepartmentId], [HireDate], [Salary], [AddressId])
values ('Ivan', 'Ivanov', 'Ivanov,', '.NET Developer', 4, '01/02/2013', 3500.00, 1),
('Petar', 'Petrov', 'Petrov', 'Senior Engineer', 5, '02/03/2004', 4000.00, 2),
('Maria', 'Petrova', 'Ivanova', 'Intern	Quality Assurance', 6, '28/08/2016', 525.2, 3),
('Georgi', 'Teziev', 'Ivanov', 'CEO Sales', 6,	'09/12/2007', 3000.00, 4),
('Peter', 'Pan', 'Pan',	'Intern	Marketing', 7, '28/08/2016', 599.88, 5)

delete from Towns
delete from Departments
delete from Addresses
