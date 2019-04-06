/* 
  给定一个Excel表格中的列名称，返回其相应的列序号。
  例如，

      A -> 1
      B -> 2
      C -> 3
      ...
      Z -> 26
      AA -> 27
      AB -> 28 
      ...

  示例 1:
  输入: "A"
  输出: 1

  示例 2:
  输入: "AB"
  输出: 28
*/


var titleToNumber = function(s) {
  let len = s.length;
  let res = 0;
  for(let i=0; i<len; i++) {
    res = res * 26 + s[i].charCodeAt() - 64;
  }
  return res;
};
console.log(titleToNumber("AB"));