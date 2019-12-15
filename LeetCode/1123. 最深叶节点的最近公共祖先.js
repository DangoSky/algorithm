/* 
给你一个有根节点的二叉树，找到它最深的叶节点的最近公共祖先。

示例 1：
输入：root = [1,2,3]
输出：[1,2,3]

示例 2：
输入：root = [1,2,3,4]
输出：[4]

示例 3：
输入：root = [1,2,3,4,5]
输出：[2,4,5]
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
 * @return {TreeNode}
 */

// 递归。如果左右子树深度相等，则当前节点就是最深叶子节点的最近公共祖先，反之在深度更大的子树上。如果只有一个最深的叶结点，那么它的最近公共祖先就是它自己
var lcaDeepestLeaves = function(root) {
  function computeDeep(root) {
    if (!root) {
      return 0;
    }
    return Math.max(computeDeep(root.left), computeDeep(root.right)) + 1;
  }

  return (function fn(root) {
    let l = computeDeep(root.left);
    let r = computeDeep(root.right);
    if (l === r) {
      return root;
    } else if (l > r) {
      return fn(root.left);
    } else {
      return fn(root.right);
    }
  })(root)
};