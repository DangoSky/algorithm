/*  
  给定由若干 0 和 1 组成的数组 A。我们定义 N_i：从 A[0] 到 A[i] 的第 i 个子数组被解释为一个二进制数（从最高有效位到最低有效位）。
  返回布尔值列表 answer，只有当 N_i 可以被 5 整除时，答案 answer[i] 为 true，否则为 false。
  1 <= A.length <= 30000
  A[i] 为 0 或 1

  示例 1：
  输入：[0,1,1]
  输出：[true,false,false]
  解释：
  输入数字为 0, 01, 011；也就是十进制中的 0, 1, 3 。只有第一个数可以被 5 整除，因此 answer[0] 为真。

 */


var prefixesDivBy5 = function(A) {
  let res = [A[0]];
  for(let i=1; i<A.length; i++) {
    res[i] = (res[i-1] * 2 + A[i]) % 5;
  }
  return res.map((val) => {
    return val % 5 === 0;
  })
};
console.log(prefixesDivBy5([1, 1, 1]));
console.log(prefixesDivBy5([1,1,1,0,1]));
console.log(prefixesDivBy5([0,1,1,1,1,1]));
