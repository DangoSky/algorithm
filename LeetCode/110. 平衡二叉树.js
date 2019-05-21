/* 
  给定一个二叉树，判断它是否是高度平衡的二叉树。
  本题中，一棵高度平衡二叉树定义为：
  一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

  示例 1:
  给定二叉树 [3,9,20,null,null,15,7]

      3
    / \
    9  20
      /  \
    15   7
  返回 true 。

  示例 2:
  给定二叉树 [1,2,2,3,3,null,null,4,4]

        1
        / \
      2   2
      / \
    3   3
    / \
  4   4
  返回 false。
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
var isBalanced = function(root) {
  // 计算子树的深度
  function fn(root) {
    return root === null ? 0 : Math.max(fn(root.left), fn(root.right)) + 1;
  }
  if(root === null)  return true;
  // 判断当前结点的左右子树的深度差
  if(Math.abs(fn(root.left) - fn(root.right)) > 1)  return false;
  // 如果当前结点是平衡二叉树，则递归判断它的左右结点
  return isBalanced(root.left) && isBalanced(root.right);
};