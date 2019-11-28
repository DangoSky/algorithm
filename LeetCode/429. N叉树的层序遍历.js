/* 
给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let res = [];
  if (!root) {
    return [];
  }
  (function fn(root) {
    let queue = [];
    queue.push(root);
    while(queue.length) {
      let sum = queue.length;
      let arr = [];
      while(sum--) {
        let node = queue.shift();
        arr.push(node.val);
        if (node.children) {
          node.children.forEach(item => {
            queue.push(item);
          })
        }
      }
      res.push(arr);
    }
  })(root)
  return res;
};

// 递归
var levelOrder = function(root) {
  let res = [];
  (function fn(root, level) {
    if (!root) {
      return;
    }
    if (!res[level]) {
      res[level] = [];
    }
    res[level].push(root.val);
    root.children.forEach(item => {
      fn(item, level + 1);
    })
  })(root, 0)
  return res;
}