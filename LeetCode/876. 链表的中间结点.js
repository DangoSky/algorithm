/* 
  给定一个带有头结点 head 的非空单链表，返回链表的中间结点。
  如果有两个中间结点，则返回第二个中间结点。

  示例 1：
  输入：[1,2,3,4,5]
  输出：此列表中的结点 3 (序列化形式：[3,4,5])
  返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
  注意，我们返回了一个 ListNode 类型的对象 ans。
  这样：ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.

  示例 2：
  输入：[1,2,3,4,5,6]
  输出：此列表中的结点 4 (序列化形式：[4,5,6])
  由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
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

// 快慢指针，慢指针移动的距离是快指针的一半
var middleNode = function(head) {
  let slow = head;
  let fast = head;
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// 双向链表
var middleNode = function(head) {
  let pre = null;
  let cur = head;
  while(cur) {
    cur.pre = pre;
    pre = cur;
    cur = cur.next;
  }
  cur = head;
  while(1) {
    if(cur === pre) {
      return cur;
    }
    else if(cur.next === pre) {
      return pre;
    }
    cur = cur.next;
    pre = pre.pre;
  }
};

// 通过链表长度来取中间结点
var middleNode = function(head) {
  let cur = head;
  let len = 0;
  while(cur) {
    len++;
    cur = cur.next;
  }
  cur = head;
  let ans = Math.floor(len / 2);
  while(ans--) {
    cur = cur.next;
  }
  return cur;
};