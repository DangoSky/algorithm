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