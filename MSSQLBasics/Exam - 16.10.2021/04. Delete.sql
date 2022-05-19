DELETE FROM Clients
WHERE AddressId IN 
	(
	SELECT Id FROM Addresses 
	WHERE Country LIKE 'C%'
	)

DELETE FROM Addresses
WHERE LEFT(Country, 1) = 'C'