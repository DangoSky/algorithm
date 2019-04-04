/* 
  给定一个整数，将其转化为7进制，并以字符串形式输出。

  示例 1:
  输入: 100
  输出: "202"
*/

var convertToBase7 = function(num) {
  if(num === 0) return '0';
  let arr = [];
  let mark = num < 0 ? '-' : '';
  num = Math.abs(num);
  while(num >= 1) {
    arr.unshift(parseInt(num % 7));
    num = parseInt(num / 7);
  }
  return mark + arr.join('') ;
};
console.log(convertToBase7(100));
console.log(convertToBase7(-7));