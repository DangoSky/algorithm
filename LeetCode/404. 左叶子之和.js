/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/* 
  计算给定二叉树的所有左叶子之和。

  示例：

      3
    / \
    9  20
      /  \
    15   7
  在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
*/
 /**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let res = 0;
  function fn(root, mark) {
    if(root === null)  return;
    if(mark && root.left === null && root.right === null)  res += root.val;
    fn(root.left, true);
    fn(root.right, false);
  }
  fn(root,false);
  return res;
};