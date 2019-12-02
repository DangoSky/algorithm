/* 
给定一个根为 root 的二叉树，每个结点的深度是它到根的最短距离。
如果一个结点在整个树的任意结点之间具有最大的深度，则该结点是最深的。
一个结点的子树是该结点加上它的所有后代的集合。
返回能满足“以该结点为根的子树中包含所有最深的结点”这一条件的具有最大深度的结点。
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
var subtreeWithAllDeepest = function(root) {
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