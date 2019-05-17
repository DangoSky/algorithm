/* 
  给定一个二叉树，返回它的中序 遍历。
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
var inorderTraversal = function(root) {
  let res = [];
  function print(root) {
    if(root === null) return root;
    print(root.left);
    res.push(root.val);
    print(root.right); 
  }
  print(root);
  return res;
};

// 迭代
var inorderTraversal = function(root) {
  let cur = root;
  let stack = [];
  let res = [];
  while(cur || stack.length !== 0) {
    // 先遍历左子树
    if(cur) {
      stack.unshift(cur);
      cur = cur.left;
    }
    // 再遍历右子树
    else {
      cur = stack.shift();
      res.push(cur.val);
      cur = cur.right;
    }
  }
  return res;
};