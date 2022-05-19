update [Employees]
set [Salary] += [Salary] * 0.12
where [DepartmentId] in (1, 2, 4, 11)

select [Salary] from Employees