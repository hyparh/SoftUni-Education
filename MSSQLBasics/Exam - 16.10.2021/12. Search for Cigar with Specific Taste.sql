CREATE PROC usp_SearchByTaste(@taste NVARCHAR(30))
AS
BEGIN
     SELECT c.CigarName, CONCAT('$',PriceForSingleCigar) AS Price,
     TasteType,
     BrandName,
     CONCAT(s.[Length],' cm') AS CigarLength,
     CONCAT(s.RingRange,' cm') AS CigarRingRange 
     FROM Cigars AS c
         JOIN Tastes AS t
         ON c.TastId = t.Id
         JOIN Brands AS b
         ON c.BrandId = b.Id
         JOIN SIZES AS s
         ON c.SizeId = s.Id
         WHERE TasteType = @taste
         ORDER BY CigarLength, CigarRingRange DESC
END