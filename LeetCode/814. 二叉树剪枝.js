/* 
给定二叉树根结点 node ，此外树的每个结点的值要么是 0，要么是 1。
返回移除了所有不包含 1 的子树的原二叉树。
( 节点 X 的子树为 X 本身，以及所有 X 的后代。)
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} node
 * @return {TreeNode}
 */

// 递归。递归判断左右子树，根据其子树的返回值选择是否将子树值为null。
var pruneTree = function(root) {
  (function fn(node) {
    if (!node) {
      return false;
    }
    let l = fn(node.left);
    let r = fn(node.right);
    if (!l) {
      node.left = null;
    }
    if (!r) {
      node.right = null;
    }
    // 如果只是node.val === 1的话，判断的只是当前节点值是否为1而已，需要 node.val === 1 || l || r 判断子孙节点，只要有一个为true即子树中含有1则不改变子树
    return node.val === 1 || l || r;
  })(root)
  return root;
}