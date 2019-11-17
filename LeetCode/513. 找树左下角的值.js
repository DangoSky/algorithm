/* 
给定一个二叉树，在树的最后一行找到最左边的值。

示例 1:
输入:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

输出: 7
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

// 比较左右子树哪个更深，每次都在深度更大的子树里面找，深度相等的话则在左子树里找。判断收否是叶子节点并返回即可。
var findBottomLeftValue = function(root) {
  function  computedDeep(root) {
    if (root === null) {
      return 0;
    }
    return Math.max(computedDeep(root.left), computedDeep(root.right)) + 1;
  }

  return (function fn(root) {
    if (root.left === null && root.right === null) {
      return root.val;
    }
    if (computedDeep(root.left) >= computedDeep(root.right)) {
      return fn(root.left);
    } else {
      return fn(root.right);
    }
  })(root) 
};

// 中序遍历（从左往右）。维护一个最大深度并以此更新结果值。
var findBottomLeftValue = function(root) {
  let res;
  let maxDeep = -1;
  (function fn(root, deep) {
    if (root === null) {
      return root;
    }
    fn(root.left, deep + 1);
    if (deep > maxDeep) {
      maxDeep = deep;
      res = root.val;
    }
    fn(root.right, deep + 1);
  })(root, 0);
  return res;
}