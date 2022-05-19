SELECT
	*
FROM Employees AS e
WHERE Salary > 
(
SELECT 
     AVG(Salary) AS DepartmentAverageSalary 
FROM Employees AS sub
WHERE sub.DepartmentID = e.DepartmentID
GROUP BY sub.DepartmentID

--unfinished
)