/* 
给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 2 或 0。如果一个节点有两个子节点的话，那么这个节点的值不大于它的子节点的值。 
给出这样的一个二叉树，你需要输出所有节点中的第二小的值。如果第二小的值不存在的话，输出 -1 。

示例 1:
输入: 
    2
   / \
  2   5
     / \
    5   7

输出: 5
说明: 最小的值是 2 ，第二小的值是 5 。

示例 2:
输入: 
    2
   / \
  2   2

输出: -1
说明: 最小的值是 2, 但是不存在第二小的值。
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

// 最小的节点是根节点，所以第二小的节点是第一个大于根节点的节点。因为子节点的值不小于根节点的值，所以递归查找左右子树
var findSecondMinimumValue = function(root) {
  const min = root.val;
  return (function fn(root) {
    if (!root) {
      return -1;
    }
    if (root.val > min) {
      return root.val;
    }
    let l = fn(root.left);
    let r = fn(root.right);
    if (l === -1) {
      return r;
    }
    if (r === -1) {
      return l;
    }
    return Math.min(l, r);
  })(root)
};