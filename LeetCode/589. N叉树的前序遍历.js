/* 
给定一个 N 叉树，返回其节点值的前序遍历。
*/
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */

// 递归
var preorder = function(root) {
  let res = [];
  (function fn(root) {
    if (!root) {
      return;
    }
    res.push(root.val);
    root.children.forEach(item => {
      fn(item);
    })
  })(root)
  return res;
};


// 迭代
var preorder = function(root) {
  if (!root) {
    return [];
  }
  const res = [];
  const queue  = [root];
  while(queue.length) {
    let node = queue.shift();
    res.push(node.val);
    for(let i=node.children.length-1; i>=0; i--) {
      queue.unshift(node.children[i]);
    }
  }
  return res;
}