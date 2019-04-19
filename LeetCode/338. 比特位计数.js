/* 
  给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
  
  示例 1:
  输入: 2
  输出: [0,1,1]
*/

var countBits = function(num) {
  let arr = [];
  for(let i=0; i<=num; i++) {
    let sum = 0;
    let tem = i;
    while(tem) {
      tem &= (tem - 1);
      sum++;
    } 
    arr.push(sum);
  }
  return arr;
};


// i 的最低位是0，则 i 中1的个数和 i>>1 中1的个数相同
// i 的最低位是1，则 i 中1的个数是 i>>1 中1的个数再加1
var countBits = function(num) {
  let arr = [0];
  for(let i=1; i<=num; i++) {
    arr[i] = arr[i >> 1] + (i % 2); 
  }
  return arr;
};
console.log(countBits(5));