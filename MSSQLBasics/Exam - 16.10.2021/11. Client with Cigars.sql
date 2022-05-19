CREATE FUNCTION udf_ClientWithCigars(@name VARCHAR(MAX))
RETURNS INT AS
BEGIN
	DECLARE @CigarCount INT =
	(
	    SELECT COUNT(cc.CigarId) FROM Clients AS c
	    INNER JOIN ClientsCigars AS cc
	    ON c.Id = cc.ClientId
	    WHERE c.FirstName = @name
	)
	RETURN @CigarCount
END