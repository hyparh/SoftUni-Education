SELECT
	FirstName AS HostWizard,
	DepositAmount AS HostWizardDeposit,
	LEAD(FirstName) OVER(ORDER BY (Id)) AS [Guest Wizard],
	LEAD(DepositAmount) OVER(ORDER BY (Id)) AS [Guest Wizard Deposit],
	DepositAmount - LEAD(DepositAmount) OVER(ORDER BY (Id) AS [Difference]
FROM WizzardDeposits

--unfinished

SELECT
	wd1.FirstName AS [Host Wizard],
	wd1.DepositAmount AS [Host Wizard Deposit],
	wd2.FirstName AS [Guest Wizard],
	wd2.DepositAmount AS [Guest Wizard Deposit],
	wd1.DepositAmount AS []
FROM WizzardDeposits AS wd1
INNER JOIN WizzardDeposits AS wd2
ON wd1.Id + 1 = wd2.Id

--second variant unfinished
