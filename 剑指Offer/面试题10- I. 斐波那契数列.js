/* 
写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项。斐波那契数列的定义如下：
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：
输入：n = 2
输出：1

示例 2：
输入：n = 5
输出：5
 
提示：
0 <= n <= 100
*/

/**
 * @param {number} n
 * @return {number}
 */

// 递归，会超时
var fib = function(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return (fib(n-1) + fib(n-2)) % 1000000007;
};

// 递归 + 记忆数组，防止对已经计算出来的值重复递归计算
// 时间复杂度 O(n)，空间复杂度 O(n)
var fib = function(n) {
  const arr = [0, 1];
  function fn(n) {
    if (arr[n] !== undefined) {
      return arr[n];
    }
    arr[n] = (fn(n-1) + fn(n-2)) % 1000000007;
    return arr[n];
  }
  return fn(n);
};

// DP，使用两个变量来保存上一个和上上一个值，可以使得空间复杂度为 O(1)
var fib = function(n) {
  let first = 0, second = 1;
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

// 斐波那契数列还可以用矩阵来求解，印象中用矩阵是最快的（时间复杂度是 O(logN)），但已经忘了怎么写了。