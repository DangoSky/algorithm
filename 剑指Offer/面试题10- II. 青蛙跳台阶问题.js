/* 
一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：
输入：n = 2
输出：2

示例 2：
输入：n = 7
输出：21

提示：
0 <= n <= 100
*/

/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  var fib = function(n) {
    const arr = [1, 1];
    function fn(n) {
      if (arr[n] !== undefined) {
        return arr[n];
      }
      arr[n] = (fn(n-1) + fn(n-2)) % 1000000007;
      return arr[n];
    }
    return fn(n);
  };
  return fib(n);
};

var numWays = function(n) {
  var fib = function(n) {
    let first = 1, second = 1;
    if (n === 0) {
      return first;
    }
    if (n === 1) {
      return second;
    }
    for(let i=2; i<=n; i++) {
      [first, second] = [second, (first + second) % 1000000007];
    }
    return second;
  }
  return fib(n);
}
