/* 
给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。

例如：
输入: 二叉搜索树:
              5
            /   \
           2     13

输出: 转换为累加树:
             18
            /   \
          20     13
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

// 从右节点 -> 根节点 -> 左节点（从大到小），使用一个变量记录累加和
var convertBST = function(root) {
  let sum = 0;
  (function fn(root) {
    if (root === null) {
      return null;
    }
    fn(root.right);
    root.val += sum;
    sum = root.val;
    fn(root.left);
  })(root)
  return root;
};