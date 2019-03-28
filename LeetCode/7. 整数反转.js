/* 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:
输入: 123
输出: 321

示例 2:
输入: -123
输出: -321

示例 3:
输入: 120
输出: 21

注意:
假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。 */



// 先将 x 转换为数组，再使用 reverse 方法反转
var reverse = function(x) {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);
  let arr = x.toString().split('');
  let mark = arr[0] === '-' ? -1 : 1;
  arr = arr.reverse();
  let result = parseInt(arr.join('')) * mark;
  return result <= MAX && result >= MIN ? result : 0;
}; 