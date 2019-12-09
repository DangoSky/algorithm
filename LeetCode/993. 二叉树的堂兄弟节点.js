/* 
在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。
如果二叉树的两个节点深度相同，但父节点不同，则它们是一对堂兄弟节点。
我们给出了具有唯一值的二叉树的根节点 root，以及树中两个不同节点的值 x 和 y。
只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true。否则，返回 false。
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

// 记录首先遇到的目标节点的父节点值和深度值，父节点值和深度值作为递归函数的参数传递。
var isCousins = function(root, x, y) {
  let first = null;
  let ans = false;
  (function fn(root, deep, father) {
    if (!root) {
      return;
    }
    if (root.val === x || root.val === y) {
      if (first) {
        ans = (father !== first.father && deep === first.deep) ? true : false;
        return;
      } else {
        first = {
          father,
          deep
        }
      }
    }
    fn(root.left, deep + 1, root.val);
    fn(root.right, deep + 1, root.val);
  })(root, 0, null)
  return ans;
};