/* 
  对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。
  给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。
  
  示例 1：
  输入：A = [1,2,0,0], K = 34
  输出：[1,2,3,4]
  解释：1200 + 34 = 1234 
*/


var addToArrayForm = function(A, K) {
  let str = A.join('');
  let str1 = K + '';
  let len = str.length > str1.length ? str.length : str1.length;
  str = str.padStart(len, 0);
  str1 = str1.padStart(len, 0);
  let arr = [];
  let carry = 0;
  for(let i=len-1; i>=0; i--) {
    let tem = parseInt(str[i]) + parseInt(str1[i]) + carry;
    carry = parseInt(tem / 10);
    arr.unshift(parseInt(tem % 10));
  }
  if(carry) {
    arr.unshift(carry);
  }
  return arr;
};

console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516));
console.log(addToArrayForm([2, 7, 4], 181));
console.log(addToArrayForm([2, 1, 5], 806));