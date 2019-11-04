/* 
给定一个二叉树

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。
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

 // 层序遍历存储在head中
var connect = function(root) {
  let cur = root;
  while(cur) {
    let dummy = new Node();  // 存储每一层的第一个节点
    let head = dummy; // 层序遍历的顺序
    while(cur) {
      if (cur.left) {
        head.next = cur.left;
        head = head.next;
      }
      if (cur.right) {
        head.next = cur.right;
        head = head.next;
      }
      cur = cur.next;
    }
    cur = dummy.next;
  }
  return root;
};