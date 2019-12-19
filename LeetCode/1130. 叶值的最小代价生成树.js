/* 
给你一个正整数数组 arr，考虑所有满足以下条件的二叉树：
每个节点都有 0 个或是 2 个子节点。
数组 arr 中的值与树的中序遍历中每个叶节点的值一一对应。（知识回顾：如果一个节点有 0 个子节点，那么该节点为叶节点。）
每个非叶节点的值等于其左子树和右子树中叶节点的最大值的乘积。
在所有这样的二叉树中，返回每个非叶节点的值的最小可能总和。这个和的值是一个 32 位整数。

示例：
输入：arr = [6,2,4]
输出：32
解释：
有两种可能的树，第一种的非叶节点的总和为 36，第二种非叶节点的总和为 32。
    24            24
   /  \          /  \
  12   4        6    8
 /  \               / \
6    2             2   4
*/

/**
 * @param {number[]} arr
 * @return {number}
 */

// 把叶子节点划分区间给左右子树，计算出当左/右子树的叶子节点区间在[start, end]之间时子树的最小代价生成树（使用一个二维数组记录避免重复计算）。
// 每次递归都返回当前根节点的最小生成代价树作为父节点的子树结果，最后递归的结果就是整棵树的最小代价生成树。
var mctFromLeafValues = function(arr) {
  let menory = Array.from(new Array(arr.length)).map(() => Array.from(new Array(arr.length)));
  return (function fn(start, end) {
    let ans = Infinity;
    if (start === end) {
      return 0;
    }
    if (menory[start][end]) {
      return menory[start][end];
    }
    for (let i=start; i<end; i++) {
      let l = fn(start, i);
      let r = fn(i + 1, end);
      let rootVal = findMax(start, i) * findMax(i + 1, end);
      ans = Math.min(ans, rootVal + l + r);
    }
    menory[start][end] = ans;
    return ans;
  })(0, arr.length - 1)

  function findMax(start, end) {
    let max = -Infinity;
    for (let i=start; i<=end; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
};
