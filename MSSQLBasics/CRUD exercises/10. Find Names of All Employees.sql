select concat([FirstName], ' ', [MiddleName], ' ',[LastName]) 
as [FulName] 
from Employees
where [Salary] in (25000, 14000, 12500, 23600)