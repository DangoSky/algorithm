/* 
  给定一个二叉树，找出其最小深度。
  最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
  说明: 叶子节点是指没有子节点的节点。

  示例:
  给定二叉树 [3,9,20,null,null,15,7],

      3
    / \
    9  20
      /  \
    15   7
  返回它的最小深度  2.
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
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量" 也就是说除非是只有一个根节点，不然的话必须要有一个根节点跟叶子节点才能组成路径。
// 根节点自己不能作为叶子节点，所以[1,2]最小深度2，[1]最小深度1. 
var minDepth = function(root) {
  if(root === null)  return 0;
  let left = minDepth(root.left);
  let right = minDepth(root.right);
  if(left && right) {
    return Math.min(left, right) + 1;
  }
  // left或者right至少有一个为0，特殊处理[1,2]的情况
  return 1 + left + right;
};