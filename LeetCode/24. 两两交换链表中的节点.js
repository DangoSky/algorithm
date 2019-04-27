/* 
  给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
  你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

  示例:
  给定 1->2->3->4, 你应该返回 2->1->4->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 递归
var swapPairs = function(head) {
  if(head === null || head.next === null) {
    return head;
  }
  let first = head;
  let second = first.next;
  let third = second.next;
  second.next = first;
  first.next = swapPairs(third);
  return second;
};