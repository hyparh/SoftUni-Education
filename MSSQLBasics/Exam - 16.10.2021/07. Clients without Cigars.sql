SELECT
	c.Id,
	CONCAT(c.FirstName, ' ', c.LastName) AS ClientName,
	c.Email
FROM Clients AS c
LEFT JOIN ClientsCigars AS cc
ON c.Id = cc.ClientId
LEFT JOIN Cigars AS ci
ON cc.CigarId = ci.Id
WHERE cc.CigarId IS NULL
ORDER BY ClientName