/* 
  Employee 表包含所有员工，他们的经理也属于员工。每个员工都有一个 Id，此外还有一列对应员工的经理的 Id。

  +----+-------+--------+-----------+
  | Id | Name  | Salary | ManagerId |
  +----+-------+--------+-----------+
  | 1  | Joe   | 70000  | 3         |
  | 2  | Henry | 80000  | 4         |
  | 3  | Sam   | 60000  | NULL      |
  | 4  | Max   | 90000  | NULL      |
  +----+-------+--------+-----------+
  给定 Employee 表，编写一个 SQL 查询，该查询可以获取收入超过他们经理的员工的姓名。在上面的表格中，Joe 是唯一一个收入超过他的经理的员工。

  +----------+
  | Employee |
  +----------+
  | Joe      |
  +----------+
*/

-- 这里需要获取两次数据表信息，一次用于遍历员工，另一次用于查该员工的经理的收入
-- 对于需要查两次表的，就得 from 两次表，这样会产生 n^2 个记录，n 是该表的行数。
select a.Name as Employee
from Employee a, Employee b
where
  a.ManagerId = b.Id
  AND
  a.Salary > b.Salary;


-- 不获取两次数据表，而是建立个临时表
select a.Name as Employee
from Employee a, (
  select Salary, Id from Employee
) b
where
  a.ManagerId = b.Id
  AND
  a.Salary > b.Salary


-- 连接两个表
select a.Name as Employee
from Employee a inner join Employee b
on
  a.ManagerId = b.Id
  AND
  a.Salary > b.Salary