--Multiple selection (from two tables at the same time)

SELECT p.PeakName, r.RiverName,
LOWER(CONCAT(LEFT(p.PeakName, LEN(p.PeakName) - 1), r.RiverName)) AS [Mix]
FROM Peaks AS p, Rivers AS r
WHERE LOWER(RIGHT(p.PeakName, 1)) = LOWER(LEFT(r.RiverName, 1))
ORDER BY Mix