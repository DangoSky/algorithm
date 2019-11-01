/* 
  给定一个二叉树，判断其是否是一个有效的二叉搜索树。

  假设一个二叉搜索树具有如下特征：
  节点的左子树只包含小于当前节点的数。
  节点的右子树只包含大于当前节点的数。
  所有左子树和右子树自身必须也是二叉搜索树。

  示例 1:
  输入:
      2
    / \
    1   3
  输出: true

  示例 2:
  输入:
      5
    / \
    1   4
      / \
      3   6
  输出: false
  解释: 输入为: [5,1,4,null,null,3,6]。
      根节点的值为 5 ，但是其右子节点值为 4 。
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  let arr = [];
  let res = true;
  function fn(root) {
    if(root === null)  return;
    fn(root.left);
    if(root.val <= arr[arr.length - 1]) {
      res = false;
      return false;
    }
    arr.push(root.val);
    fn(root.right);
  }
  fn(root);
  return res;
};