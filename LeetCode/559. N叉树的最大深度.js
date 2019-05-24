/* 
  给定一个 N 叉树，找到其最大深度。
  最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

  说明:
  树的深度不会超过 1000。
树的节点总不会超过 5000。
*/
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  function fn(root, deep) {
    if(root === null)  return 0;
    max = Math.max(max, deep);
    root.children.forEach(val => {
      fn(val, deep + 1);
    })
  }

  if(root === null)  return 0;
  let max = 0;
  fn(root, 1);
  return max;
};