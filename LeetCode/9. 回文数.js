/* 
  判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
*/

// 翻转
var isPalindrome = function(x) {
  x = x + '';
  let str = x.split('').reverse().join('');
  return str === x;  
};

// 字符串模拟翻转
var isPalindrome = function(x) {
  x = x + '';
  let str = '';
  for(let i=x.length-1; i>=0; i--) {
    str += x[i];
  }
  return str === x;
};

// 模拟实现
var isPalindrome = function(x) {
  let num = x;
  let ans = 0;
  while(x > 0) {
    ans = ans * 10 + x % 10;
    x = parseInt(x / 10);
  }
  return ans === num;
};
console.log(isPalindrome(-121));
console.log(isPalindrome(121));