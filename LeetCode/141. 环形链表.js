/* 
  给定一个链表，判断链表中是否有环。
  为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
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
 * @return {boolean}
 */

 // 使用 map 存储每一个节点的地址
var hasCycle = function(head) {
  let map = new Map();
  while(head) {
    if(map.get(head) === true) {
      return true;
    }
    else {
      map.set(head, true);   
    }
    head = head.next;
  }
  return false;
};

// 快慢指针 
var hasCycle = function(head) {
  if(head === null) {
    return false;
  }
  let slow = head;
  let fast = head;
  while(fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) {
      return true;
    }
  }
  return false;
};

// 快慢指针
var hasCycle = function(head) {
  if(head === null) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  while(slow !== null && fast !== null) {
    if(slow === fast) {
      return true;
    }
    if(fast.next === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};