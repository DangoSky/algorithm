/* 
  给定一个二叉树，检查它是否是镜像对称的。
  例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
      1
    / \
    2   2
  / \ / \
  3  4 4  3
  但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
      1
    / \
    2   2
    \   \
    3    3
  说明:
  如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
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

// 还是先假设一颗空树，一颗只有一个结点、只有两个结点的树，以此写出递归式
var isSymmetric = function(root) {
  function fn(l, r) {
    if(l === null && r === null)  return true;
    if(l === null || r=== null || l.val !== r.val)  return false;
    return fn(l.left, r.right) && fn(l.right, r.left);
  }
  return fn(root, root);
};

// 迭代，思路同递归
var isSymmetric = function(root) {
  let q = [];
  q.push(root);
  q.push(root);
  while(q.length) {
    let l = q.shift();
    let r = q.shift();
    if(l === null && r === null)  continue;
    if(l === null || r=== null || l.val !== r.val)  return false;
    q.push(l.left);
    q.push(r.right);
    q.push(l.right);
    q.push(r.left);
  }
  return true;
}