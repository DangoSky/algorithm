/* 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。

示例:
输入: 38
输出: 2 
解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2 */


// 模拟过程
var addDigits = function(num) {
  let sum = 0;
  while(num >= 1) {
    sum += num % 10;
    num = parseInt(num / 10);    // js是弱语言，因此要使用parseInt()转为整数
  }
  if(sum < 10)  return sum;
  else return addDigits(sum);
};
console.log(addDigits(38));


// 直接套公式
// 数组根：https://en.wikipedia.org/wiki/Digital_root
var addDigits = function(num) {
  return 1 + (num - 1) % 9;
};
console.log(addDigits(38));