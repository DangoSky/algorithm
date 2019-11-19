/* 
给定一个二叉树，计算整个树的坡度。
一个树的节点的坡度定义即为，该节点左子树的结点之和和右子树结点之和的差的绝对值。空结点的的坡度是0。
整个树的坡度就是其所有节点的坡度之和。

示例:

输入: 
         1
       /   \
      2     3
输出: 1

解释: 
结点的坡度 2 : 0
结点的坡度 3 : 0
结点的坡度 1 : |2-3| = 1
树的坡度 : 0 + 0 + 1 = 1
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

// 递归。计算每个节点的坡度，累加到结果数中，并给父节点返回它的子树和。
var findTilt = function(root) {
  let res = 0;
  (function fn(root) {
    if (root === null) {
      return 0;
    }
    let l = fn(root.left);
    let r = fn(root.right);
    res += Math.abs(l - r);
    return l + r + root.val;
  })(root)
  return res;
};