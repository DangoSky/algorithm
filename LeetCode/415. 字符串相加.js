/* 
  给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
  注意：
  num1 和num2 的长度都小于 5100.
  num1 和num2 都只包含数字 0-9.
  num1 和num2 都不包含任何前导零。
  你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
*/

var addStrings = function(num1, num2) {
  let len = num1.length > num2.length ? num1.length : num2.length;
  num1 = num1.padStart(len, 0);
  num2 = num2.padStart(len, 0);
  let carry = 0;
  let str = '';
  for(let i=len-1; i>=0; i--) {
    let tem = parseInt(num1[i]) + parseInt(num2[i]) + carry;
    str += tem % 10;
    carry = parseInt(tem / 10);
  }
  if(carry) {
    str += carry;
  }
  return str.split('').reverse().join('');
};
console.log(addStrings('98', '9'));