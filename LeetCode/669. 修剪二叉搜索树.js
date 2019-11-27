/* 
给定一个二叉搜索树，同时给定最小边界L 和最大边界 R。通过修剪二叉搜索树，使得所有节点的值在[L, R]中 (R>=L) 。你可能需要改变树的根节点，所以结果应当返回修剪好的二叉搜索树的新的根节点。

示例 1:
输入: 
    1
   / \
  0   2

  L = 1
  R = 2

输出: 
    1
      \
       2

示例 2:
输入: 
    3
   / \
  0   4
   \
    2
   /
  1

  L = 1
  R = 3

输出: 
      3
     / 
   2   
  /
 1
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
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */

// 递归。若当前的节点值小于L，说明新节点在右子树，则返回右子树给上层上层。若大于R，则返回左子树给上层，否则返回原节点给上层。
var trimBST = function(root, L, R) {
  return (function fn(root) {
    if (!root) {
      return null;
    }
    root.left = fn(root.left);
    root.right = fn(root.right);
    if (root.val < L) {
      return root.right;
    } else if (root.val > R) {
      return root.left;
    } else {
      return root;
    }
  })(root)
};