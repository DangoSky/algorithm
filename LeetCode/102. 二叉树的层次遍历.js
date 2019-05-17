/* 
  给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
  例如:
  给定二叉树: [3,9,20,null,null,15,7],
      3
    / \
    9  20
      /  \
    15   7
  返回其层次遍历结果：
  [
    [3],
    [9,20],
    [15,7]
  ]
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(root === null)  return [];
  let queue = [];
  let res = [];
  queue.push(root);
  // 每一层的节点数量
  let sum = 1;
  while(queue.length) {
    let temp = [];
    while(sum--) {
      let top = queue.shift();
      temp.push(top.val);
      if(top.left)  queue.push(top.left);
      if(top.right)  queue.push(top.right);
    }
    res.push(temp);
    sum = queue.length;
  }
  return res;
};