/* 
  编写一个 SQL 查询，查找 Person 表中所有重复的电子邮箱。

  示例：

  +----+---------+
  | Id | Email   |
  +----+---------+
  | 1  | a@b.com |
  | 2  | c@d.com |
  | 3  | a@b.com |
  +----+---------+
  根据以上输入，你的查询应返回以下结果：

  +---------+
  | Email   |
  +---------+
  | a@b.com |
  +---------+
  说明：所有电子邮箱都是小写字母。
 */

-- 等值连接后，使用 distinct 去重
select distinct a.Email
from Person a inner join Person b
on
  a.Email = b.Email
  AND
  a.Id != b.Id;


-- 先计算表中相同数据的个数，生成临时表再做筛选
select Email from (
  select Email, count(Email) as num
  from Person
  group by Email
) temp_table
where num > 1