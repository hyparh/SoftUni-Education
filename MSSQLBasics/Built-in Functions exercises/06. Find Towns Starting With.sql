--Built-in functions solution

select * from Towns
where left([Name], 1) in ('M', 'K', 'B', 'E')
order by [Name]

--Wildcards solution

select * from Towns
where [Name] like '[mkbe]%'
order by [Name]