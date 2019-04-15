/* 
  给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。

  注意:
  给定的整数保证在32位带符号整数的范围内。
  你可以假定二进制数不包含前导零位。

  示例 1:
  输入: 5
  输出: 2
  解释: 5的二进制表示为101（没有前导零位），其补数为010。所以你需要输出2。
*/

var findComplement = function(num) {
  let str = num.toString(2);
  let res = '';
  for(let i=0, len=str.length; i<len; i++) {
    res += str[i] === '1' ? 0 : 1;
  }
  return parseInt(res, 2);
};
console.log(findComplement(5));
console.log(findComplement(1));