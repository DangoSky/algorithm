/*
  删除链表中等于给定值 val 的所有节点。

  示例:
  输入: 1->2->6->3->4->5->6, val = 6
  输出: 1->2->3->4->5 
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let cur = head;
  while(cur) { 
    if(cur.val === val) {
      head = cur.next;
      cur = head;
      continue;
    }
    if(cur.next && cur.next.val === val) {
      cur.next = cur.next.next;
      continue;
    }
    cur = cur.next;
  }
  return head;
};

// 递归
var removeElements = function(head, val) {
  if(head === null) {
    return head;
  }
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
};