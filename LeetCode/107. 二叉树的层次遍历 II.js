/* 
  给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
  例如：
  给定二叉树 [3,9,20,null,null,15,7],

      3
    / \
    9  20
      /  \
    15   7
  返回其自底向上的层次遍历为：

  [
    [15,7],
    [9,20],
    [3]
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
// 同 102.二叉树的层次遍历I，最后翻转一下结果就可以了
var levelOrderBottom = function(root) {
  if(!root)  return [];
  let res = [];
  let queue = [];
  queue.push(root);
  while(queue.length) {
    let sum = queue.length;
    let temp = [];
    while(sum--) {
      let top = queue.shift();
      temp.push(top.val);
      if(top.left) {
        queue.push(top.left);
      }
      if(top.right) {
        queue.push(top.right);
      }
    }
    res.push(temp);
  }
  return res.reverse();
};


var levelOrderBottom = function(root) {
  if(!root)  return [];
  let res = [];
  let queue = [];
  queue.push(root);
  while(queue.length) {
    let sum = queue.length;
    let temp = [];
    while(sum--) {
      let top = queue.shift();
      temp.push(top.val);
      if(top.left) {
        queue.push(top.left);
      }
      if(top.right) {
        queue.push(top.right);
      }
    }
    // 同 102.二叉树的层次遍历I，只需要把temp放到结果数组的头部（相当于栈）就行了
    res.unshift(temp);
  }
  return res;
};