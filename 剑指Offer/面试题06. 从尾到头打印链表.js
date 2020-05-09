
/* 
输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

示例 1：
输入：head = [1,3,2]
输出：[2,3,1]
 
限制：
0 <= 链表长度 <= 10000
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
 * @return {number[]}
 */

//  先构造双向链表再从后向前遍历链表打印
var reversePrint = function(head) {
  function  reverse(head) {
    let pre = null;
    let cur = head;
    while(cur) {
      cur.pre = pre;
      pre = cur;
      cur = cur.next;
    }
    return pre;
  }

  let last = reverse(head);
  const res = [];
  while(last) {
    res.push(last.val);
    last = last.pre;
  }
  return res;
};

// 通过 unshift 直接插入到数组头，或者使用 reverse 翻转数组
var reversePrint = function(head) {
  const res = [];
  let cur = head;
  while(cur) {
    res.unshift(cur.val);
    cur = cur.next;
  }
  return res;
}
