/* 
  反转一个单链表。

  示例:
  输入: 1->2->3->4->5->NULL
  输出: 5->4->3->2->1->NULL
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

// 使用一个数组存储每个节点的值，再从数组尾部开始给每一个节点赋值 
var reverseList = function(head) {
  let arr = [];
  let cur = head;
  while(cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  cur = head;
  for(let i=arr.length-1; i>=0; i--) {
    cur.val = arr[i];
    cur = cur.next;
  }
  return head;
};

// 递归
var reverseList = function(head) {
  if(head === null || head.next === null) {
    return head;
  }
  let cur = reverseList(head.next);
  head.next.next = head
  head.next = null;
  return cur;
};

// 从第一个节点开始遍历，pre 初始化为 null
var reverseList = function(head) {
  let cur = head;
  let pre = null
  while(cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};

// 从第二个节点开始遍历，pre 初始化为头节点
var reverseList = function(head) {
  if(!head) {
    return null;
  }
  let cur = head.next;
  let pre = head;
  pre.next = null;
  while(cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};