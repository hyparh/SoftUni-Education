SELECT 
	*,
	DENSE_RANK()
FROM Employees as e
RIGHT JOIN Departments AS d
ON e.DepartmentID = d.DepartmentID

--unfinished