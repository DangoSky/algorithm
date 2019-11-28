/* 
给定一个 N 叉树，返回其节点值的后序遍历。
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
 * @return {number[]}
 */

// 递归
var postorder = function(root) {
  let res = [];
  (function fn(root) {
    if (!root) {
      return;
    }
    root.children.forEach(item => {
      fn(item);
    })
    res.push(root.val);
  })(root)

  return res;
};


// 迭代
var postorder = function(root) {
  if (!root) {
    return [];
  }
  let res = [];
  let queue = [root];
  while(queue.length) {
    let node = queue.shift();
    node.children.forEach(item => {
      queue.unshift(item);
    })
    res.unshift(node.val);
  }
  return res;
}