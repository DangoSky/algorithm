/* 
  给定一个二叉树，返回它的 后序 遍历。
*/
/* 
  给定一个二叉树，返回它的 前序 遍历。
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
 * @return {number[]}
 */

// 递归
var postorderTraversal = function(root) {
  let res = [];
  function print(root) {
    if(!root)  return root;
    print(root.left);
    print(root.right);
    res.push(root.val);
  }
  print(root);
  return res;
};

// 迭代
var postorderTraversal = function(root) {
  if(root === null)  return [];
  let res = [];
  let stack = [root];
  while(stack.length) {
    let top = stack.shift();
    if(top.left)  stack.unshift(top.left);
    if(top.right)  stack.unshift(top.right);
    res.unshift(top.val);
  }
  return res;
}

