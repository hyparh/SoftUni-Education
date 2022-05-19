CREATE PROCEDURE usp_GetEmployeesSalaryAbove35000 @minSalary DECIMAL(18, 4)
AS
BEGIN
	SELECT
		FirstName,
		LastName
	FROM Employees
	WHERE Salary > 35000
END