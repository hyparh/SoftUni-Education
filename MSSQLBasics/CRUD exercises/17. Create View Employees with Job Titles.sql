create view [V_EmployeeNameJobTitle] as 
(select concat([FirstName], ' ', [MiddleName], ' ', [LastName]) 
as [FullName], [JobTitle] 
as [Job Title] from Employees)