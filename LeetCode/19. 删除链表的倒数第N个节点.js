/* 
  给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

  示例：
  给定一个链表: 1->2->3->4->5, 和 n = 2.
  当删除了倒数第二个节点后，链表变为 1->2->3->5.

  说明：
  给定的 n 保证是有效的。

  进阶：
  你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
// 先一遍遍历算出链表长度
var removeNthFromEnd = function(head, n) {
  function fn(l) {
    let num = 0;
    while(l) {
      num++;
      l = l.next;
    }
    return num;
  }
  let length = fn(head);
  // 如果是删除第一个节点的话则直接返回
  if(length - n === 0) {
    return head.next;
  }
  let cur = head;
  let index = 0;
  while(cur) {
    if(index + 1== length - n) {
      cur.next = cur.next.next;
    }
    cur = cur.next;
    index++;
  }
  return head;
};