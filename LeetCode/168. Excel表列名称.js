/* 
  给定一个正整数，返回它在 Excel 表中相对应的列名称。
  例如，
      1 -> A
      2 -> B
      3 -> C
      ...
      26 -> Z
      27 -> AA
      28 -> AB 
      ...

  示例 1:
  输入: 1
  输出: "A"

  示例 2:
  输入: 28
  输出: "AB"
*/


var convertToTitle = function(n) {
  let str = '';
  while(n > 0) {
    let tem = parseInt(n % 26);
    tem = tem ? tem + 64 : 90;
    str = String.fromCharCode(tem) + str;
    if(n % 26 === 0) n--;
    n = parseInt(n / 26);
  }
  return str;
};
console.log(convertToTitle(701));
console.log(convertToTitle(27));
console.log(convertToTitle(52));