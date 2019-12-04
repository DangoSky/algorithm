/* 
给定二叉搜索树的根结点 root，返回 L 和 R（含）之间的所有结点的值的和。二叉搜索树保证具有唯一的值。

示例 1：
输入：root = [10,5,15,3,7,null,18], L = 7, R = 15
输出：32

示例 2：
输入：root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
输出：23

题意：累加树中所有节点值大于等于L小于等于R的节点值。
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
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  let ans = 0;
  (function fn(root) {
    if (!root) {
      return;
    }
    if (root.val >= L && root.val <= R) {
      ans += root.val;
    }
    if (root.val < L) {
      fn(root.right);
    } else if (root.val > R) {
      fn(root.left);
    }
  })(root)
  return ans;
};


// 递归。先底向上返回底层的结果最终累加给根节点。
// 当前节点值小于L，则只需要递归右子树；当前节点值大于R，则只需要递归左子树。若L<=当前节点值<=R，则返回左右子树的递归结果+当前的节点值给上层。
var rangeSumBST = function(root, L, R) {
  return (function fn(root) {
    if (!root) {
      return 0;
    }
    if (root.val < L) {
      return fn(root.right);
    }
    if (root.val > R) {
      return fn(root.left);
    }
    return fn(root.left) + fn(root.right) + root.val;
  })(root)
}