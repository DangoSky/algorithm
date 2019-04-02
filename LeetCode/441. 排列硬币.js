/* 
  你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。
  给定一个数字 n，找出可形成完整阶梯行的总行数。
  n 是一个非负整数，并且在32位有符号整型的范围内。
 */

 
// 先一层for循环求出n层需要多少个硬币并存储在一个数组中
var arrangeCoins = function(n) {
  let arr = [0];
  for(let i=1; i<100000; i++) {
    arr[i] = arr[i-1] + i;
  }
  for(let i=0; i<100000; i++) {
    if(arr[i] <= n && arr[i+1] > n) {
      return i;
    }
  }
};

// 暴力破解
var arrangeCoins = function(n) {
  let sum = 0;
  let index = 1;
  while(sum < n) {
    sum += index;
    if(sum > n) {
      return index - 1;
    }
    index++;
  }
  return index - 1;
};
console.log(arrangeCoins(1));
console.log(arrangeCoins(2));
console.log(arrangeCoins(5));
console.log(arrangeCoins(8));
console.log(arrangeCoins(1804289383));