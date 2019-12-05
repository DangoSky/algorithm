/* 
给定一个二叉树，确定它是否是一个完全二叉树。
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

// 层序遍历。使用一个变量finished标记是否已经遇到空节点。finished为true后若还遇到空节点说明不是完全二叉树。
var isCompleteTree = function(root) {
  let arr = [root];
  let finished = false;
  while(arr.length) {
    let node = arr.shift();
    if (node && finished) {
      return false;
    }
    if (node === null) {
      finished = true;
      continue;
    }
    arr.push(node.left);
    arr.push(node.right);
  }
  return true;
};