select [FirstName], [LastName] from Employees
where CHARINDEX('ei', [LastName]) <> 0

--Wildcards solution

select [FirstName], [LastName] from Employees
where [LastName] like '%ei%'