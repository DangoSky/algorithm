/* 
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
注意：给定 n 是一个正整数。

示例 1：
输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶

示例 2：
输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
*/

/**
 * @param {number} n
 * @return {number}
 */

// 暴力破解，递归。每次都递归跳一个台阶和跳两个台阶的情况，直到已经跳过的台阶大于等于目标阶数时才终止递归（有很多重复的计算）。
// 时间复杂度：O(2^n)，会超时
var climbStairs = function(n) {
  function fn(sum) {
    if (sum > n) {
      return 0;
    }
    if (sum === n) {
      return 1;
    }
    return fn(sum+1) + fn(sum+2);
  }
  return fn(0);
};

// 还是递归，不过使用一个记忆数组记录已经计算后的值，防止重复的递归计算
// 时间复杂度：O(n)，空间复杂度：O(n)
var climbStairs = function(n) {
  const mark = [];
  function fn(sum) {
    if (sum > n) {
      return 0;
    }
    if (sum === n) {
      return 1;
    }
    if (mark[sum]) {
      return mark[sum];
    }
    mark[sum] = fn(sum+1) + fn(sum+2);
    return mark[sum];
  }
  return fn(0);
};


// dp。当要跳到第 n 阶时，最好的情况就是在第 n-1 阶时跳 1 阶，或者在第 n-2 阶时跳 2 阶，这样往前一直寻找最优解即可
// 时间复杂度：O(n)，空间复杂度：O(n)
var climbStairs = function(n) {
  const dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for(let i=3; i<=n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n];
};


// 由 dp 的公式得出，其实结果值就是一个斐波那契数列，所以直接迭代计算斐波那契数列，不用一个数组来记录前面的 dp 值
// 时间复杂度：O(n)，空间复杂度：O(1)
var climbStairs = function(n) {
  let first = 1, second = 2;
  if (n === 1) {
    return first;
  } else if (n === 2) {
    return second;
  }
  let res;
  for(let i=3; i<=n; i++) {
    res = first + second;
    first = second;
    second = res;
  }
  return res;
};
