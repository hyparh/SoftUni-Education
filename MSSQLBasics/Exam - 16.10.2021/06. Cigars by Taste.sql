SELECT
	c.Id,
	c.CigarName,
	c.PriceForSingleCigar,
	t.TasteType,
	t.TasteStrength
FROM Cigars AS c
LEFT JOIN Tastes AS t
ON c.TastId = t.Id
WHERE TasteType = 'Earthy' OR TasteType = 'Woody'
ORDER BY PriceForSingleCigar DESC
