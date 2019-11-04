import { notDeepEqual } from "assert";

/* 
给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。初始状态下，所有 next 指针都被设置为 NULL。
*/

/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */

 // 相当于层次遍历，但是空间复杂度不是O(1)
var connect = function(root) {
  if (root === null) {
    return null;
  }
  let queue = [];
  queue.push(root);
  while(queue.length) {
    let sum = queue.length;
    while(sum--) {
      let node = queue.shift();
      if (sum === 0) {
        node.next = null;
      } else {
        node.next = queue[0];
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
  return root;
};


// 自顶向下递归。
// 1. 左孩子的next都是父节点的右孩子。
// 2. 若父节点的next存在，则右孩子的next是其父节点的next的左孩子，不存在的话则是null。
// 以此递归左右子树。
var connect = function(root) {
  (function fn(node) {
    if ((node === null) || (node.left === null && node.right === null)) {
      return;
    }
    node.left.next = node.right;
    if (node.next) {
      node.right.next = node.next.left;
    } else {
      node.right.next = null;
    }
    fn(node.left);
    fn(node.right);
  })(root);
  return root;
}