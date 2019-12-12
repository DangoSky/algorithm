/* 
给出一棵二叉树，其上每个结点的值都是 0 或 1 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。例如，如果路径为 0 -> 1 -> 1 -> 0 -> 1，那么它表示二进制数 01101，也就是 13 。
对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。
以 10^9 + 7 为模，返回这些数字之和。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 递归。相当于寻找所有根节点到叶子节点的路径。每下一层，就将已经过路径的数字和乘2，在叶子节点累加结果即可。
var sumRootToLeaf = function(root) {
  let ans = 0;
  (function fn(root, sum) {
    if (!root) {
      return;
    }
    sum = (sum * 2 + root.val) % 1000000007;
    if (!root.left && !root.right) {
      ans += sum;
      ans %= 1000000007;
      return;
    } 
    fn(root.left, sum);
    fn(root.right, sum);
  })(root, 0)

  return ans;
};