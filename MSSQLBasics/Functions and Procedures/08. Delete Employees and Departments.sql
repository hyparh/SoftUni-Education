--4 is just for example. Later will change with real variable.
--Returns set of employee IDs of given department. IDs of the employees which are being deleted.

CREATE PROCEDURE usp_DeleteEmployeesFromDepartment (@departmentId INT)
AS
BEGIN
    --First we need to delete all records from EmployeesProjects where EMployeeID 
	--is one of the lately deleted.
	DELETE FROM EmployeesProjects
	WHERE EmployeeID IN
		(
		SELECT
	    EmployeeID
        FROM Employees
        WHERE DepartmentID = @departmentId	
		)

    --We need to set ManagerID to NULL of all employees which have their manager lately deleted.
	UPDATE EMployees
	SET ManagerID = NULL
	WHERE ManagerID IN
		(
		SELECT
	    EmployeeID
        FROM Employees
        WHERE DepartmentID = @departmentId
		)

	--We need to alter ManagerID column from Departments in order to be nullable,
	--because we need to set ManagerID to NULL of all Departments that have their
	--manager lately deleted.
	ALTER TABLE Departments
	ALTER COLUMN ManagerID INT NULL

	--We need to set ManagerID to NULL (no manager) to all departments that have
	--their manager lately deleted.
	UPDATE Departments
	SET ManagerID = NULL
	WHERE ManagerID IN
		(
		SELECT
	    EmployeeID
        FROM Employees
        WHERE DepartmentID = @departmentId
		)

	--We need to delete all employees from lately deleted department.
	DELETE FROM Employees
	WHERE DepartmentID = @departmentId

	--Lastly we delete unwanted department
	DELETE FROM Departments
	WHERE DepartmentID = @departmentId

	SELECT 
		COUNT(*)
	FROM Employees
	WHERE DepartmentID = @departmentId
END