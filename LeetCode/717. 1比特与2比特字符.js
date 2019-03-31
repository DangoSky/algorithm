/* 
  有两种特殊字符。第一种字符可以用一比特0来表示。第二种字符可以用两比特(10 或 11)来表示。
  现给一个由若干比特组成的字符串。问最后一个字符是否必定为一个一比特字符。给定的字符串总是由0结束。

  示例 1:
  输入: 
  bits = [1, 0, 0]
  输出: True
*/

var isOneBitCharacter = function(bits) {
  let sum = 0;
  for(let i=bits.length-2; i>=0; i--) {
    if(bits[i] !== 1) {
      break;
    } 
    sum++;  
  }
  return sum % 2 === 0 ? true : false;
};
console.log(isOneBitCharacter([1,1,1,0]));