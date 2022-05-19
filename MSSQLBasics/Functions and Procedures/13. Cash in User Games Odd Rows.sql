--Scalar function

CREATE FUNCTION ufn_CashInUsersGames (@gameName NVARCHAR(50))
RETURNS TABLE 
AS 
RETURN SELECT
	(
		SELECT SUM(Cash) AS SumCash
	    FROM (
			SELECT 
				g.[Name],
				ug.Cash,
				ROW_NUMBER() OVER(PARTITION BY g.[Name] ORDER BY ug.Cash DESC) AS RowNumber
			FROM UsersGames AS ug
			INNER JOIN Games AS g
			ON ug.GameId = g.Id
			WHERE g.[Name] = @gameName
			) AS RowNumberSubquery
		WHERE RowNumber % 2 != 0
	) AS SumCash

--This one doesn't go in Judge
SELECT * FROM ufn_CashInUsersGames('Love in a mist')