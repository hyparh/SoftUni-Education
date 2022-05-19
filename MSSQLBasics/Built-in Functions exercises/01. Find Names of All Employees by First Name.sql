SELECT [FirstName], [LastName] FROM EMployees
WHERE LEFT(FirstName, 2) = 'Sa'

--second way

SELECT [FirstName], [LastName] FROM EMployees
WHERE SUBSTRING(FirstName, 1, 2) = 'Sa'

