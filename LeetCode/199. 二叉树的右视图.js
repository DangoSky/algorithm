/* 
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例:
输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  const res = [];
  (function dfs(root, deep) {
    if(root === null) return;
    if (deep > res.length) {
      res.push(root.val);
    }
    if (root.right) {
      dfs(root.right, deep + 1);
    }
    if (root.left) {
      dfs(root.left, deep + 1);
    }
  })(root, 1)
  return res;
};