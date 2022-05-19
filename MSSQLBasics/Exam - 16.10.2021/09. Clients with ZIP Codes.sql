SELECT
    CONCAT(c.FirstName, ' ', c.LastName) AS FullName,
    a.Country,
    a.ZIP,
    CONCAT('$', MAX(PriceForSingleCigar)) AS CigarPrice
FROM Clients AS c
JOIN Addresses AS a
ON c.Id = a.Id
JOIN ClientsCigars AS cc
ON c.Id = cc.ClientId
JOIN Cigars AS ci
ON ci.Id = cc.CigarId
WHERE a.ZIP NOT LIKE '%[^0-9]%'
GROUP BY FirstName, LastName, Country, ZIP
ORDER BY FullName
