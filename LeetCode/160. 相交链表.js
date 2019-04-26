/* 
  编写一个程序，找到两个单链表相交的起始节点。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */


var getIntersectionNode = function(headA, headB) {
  let l1 = headA;
  let l2 = headB;
  let len1 = 0;
  let len2 = 0;
  // 获取两个链表的长度
  while(l1 || l2) {
    if(l1) {
      l1 = l1.next;
      len1++;
    }
    if(l2) {
      l2 = l2.next;
      len2++;
    }
  }
  // 重新获取两个链表
  l1 = headA;
  l2 = headB;
  // 使两个链表调整到等长
  if(len1 > len2) {
    let dis = len1 - len2;
    while(dis--) {
      l1 = l1.next;
    }
  }
  else if(len1 < len2) {
    let dis = len2 - len1;
    while(dis--) {
      l2 = l2.next;
    }
  }
  // 找到指向相同地址的链表入口
  let ans = null;
  while(l1 && l2) {
    if(l1 === l2) {
      ans = l1;
      break;
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  return ans;
};