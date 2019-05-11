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

// 先后指针
// 快指针先走n-1步后慢指针再开始从头节点开始走。当快指针走到最后一个结点的时候，慢指针就走到了倒数第N个结点
// 证明：
// 假设总共有N个结点，则倒数第n个结点就是正数第N-n+1个结点。
// 从头结点正向走到第N-n+1个结点需要走N-n步，而从头节点到链表最后一个结点需要走N-1步，所以还剩n+1步。
// 即让快指针先走n+1步后再让慢指针同时走直到快指针走到链表尾即可。
var removeNthFromEnd = function(head, n) {
  // 先指针先走n-1步
  let fast = head;
  for(let i=1; i<=n-1; i++) {
    fast = fast.next;
  }
  let slow = head;
  // 缓存要删除结点的前一个结点
  let pre = null;
  while(fast.next) {
    pre = slow;
    fast = fast.next;
    slow = slow.next;
  }
  // 如果要删除的结点是第一个结点的话，则直接返回slow.next
  if(pre === null) {
    return slow.next;
  }
  else {
    pre.next = slow.next;
  }
  return head;
}

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