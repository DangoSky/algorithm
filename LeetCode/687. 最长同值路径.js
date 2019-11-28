/* 
给定一个二叉树，找到最长的路径，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。
注意：两个节点之间的路径长度由它们之间的边数表示。

示例 1:
输入:

              5
             / \
            4   5
           / \   \
          1   1   5
输出: 2

示例 2:
输入:

              1
             / \
            4   5
           / \   \
          4   4   5
输出: 2

注意: 给定的二叉树不超过10000个结点。 树的高度不超过1000。
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

// 递归。计算左右子树中同值路径的长度，并返回其中较大的给上一层。
// 注意不能直接返回子树递归得到的长度l/r，而是要重新定义变量表示当前节点的同值路径长度lSum和rSum，如果当前节点值等于子树节点值，则更新lSum/rSum。
// 若是直接返回l/r，祖先节点会收集到子树中所有同值的路径长度，比如孙节点有一个同值(1)路径长度是2，孙孙节点有一个同值(11)路径长度是3，则2和3都会加到l/r上。
// 所以需要重新定义lSum和rSum，表示当前节点的同值路径长度，避免累加上子树的同值路径节点。
var longestUnivaluePath = function(root) {
  let ans = 0;
  (function fn(root) {
    if (!root) {
      return 0;
    }
    let l = fn(root.left);
    let r = fn(root.right);
    let lSum = 0, rSum = 0;
    if (root.left &&  root.left.val === root.val) {
      lSum = l + 1;
    }
    if (root.right && root.right.val === root.val) {
      rSum = r + 1;
    }
    ans = ans > (lSum + rSum) ? ans : (lSum + rSum);
    return Math.max(lSum, rSum);
  })(root)

  return ans;
};