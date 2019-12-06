/* 
如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。
只有给定的树是单值二叉树时，才返回 true；否则返回 false。
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

// 把当前节点的值传给递归函数，比较每个节点的值和根节点的值是否都相等。
var isUnivalTree = function(root) {
  if (!root) {
    return false;
  }
  return (function fn(root, val) {
    if (!root) {
      return true;
    }
    if(root.val !== val) {
      return false;
    }
    return fn(root.left, root.val) && fn(root.right, root.val);
  })(root, root.val)
};

// 将当前节点值和左右子树值比较。
var isUnivalTree = function(root) {
  return (function fn(root) {
    if (!root || (!root.left && !root.right)) {
      return true;
    }
    if (root.left && root.val !== root.left.val) {
      return false;
    }
    if (root.right && root.val !== root.right.val) {
      return false;
    }
    return fn(root.left) && fn(root.right);
  })(root)
}