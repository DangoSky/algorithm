/* 
  统计所有小于非负整数 n 的质数的数量。

  示例:
  输入: 10
  输出: 4
  解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7。
*/
/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function(n) {
  // 判断是否是质数
  function judge(n) {
    for(let i=2, len=Math.sqrt(n); i<=len; i++) {
      if(n % i === 0)  return false;
    }
    return true;
  }
  let ans = 0;
  for(let i=2; i<n; i++) {
    if(judge(i)) ans++;
  }
  return ans;
};

// 厄拉多塞筛法，时间复杂度O(NloglogN)
// 从2开始遍历，把2的倍数都标记为false（不是素数）。再从2的下一位素数3开始，也标记其倍数。
// 以此类推，最后仍为true的则为素数。
var countPrimes = function(n) {
  // 标记是否为素数
  let mark = Array(n).fill(true);
  // 存放素数
  let primes = [];
  let index = 0;
  for(let i=2; i<=n; i++) {
    if(mark[i] === true) {
      primes[index++] = i;
      for(let j=i+i; j<=n; j+=i) {
        mark[j] = false;
      }
    }
  }
  return primes.length;
};