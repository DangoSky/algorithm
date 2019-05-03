/* 
  请判断一个链表是否为回文链表。

  示例 1:
  输入: 1->2
  输出: false

  示例 2:
  输入: 1->2->2->1
  输出: true

  进阶：
  你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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

// 数组缓存 + reverse
var isPalindrome = function(head) {
  let arr = [];
  let cur = head;
  while(cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  return arr.join('') ===  arr.reverse().join('');
};

// 双向链表
var isPalindrome = function(head) {
  let pre = null;
  let cur = head;
  while(cur) {
    cur.pre = pre;
    pre = cur;
    cur = cur.next;
  }
  let tail = pre;
  cur = head;
  while(cur) {
    if(cur.val !== tail.val) {
      return false;
    }
    cur = cur.next;
    tail = tail.pre;
  }
  return true;
};

// 翻转链表
// 理论上这个方法可行，但使用 JSON.parse(JSON.stringify(head))报了栈溢出，不知道为什么
var isPalindrome = function(head) {
  function reverse(head) {
    let pre = null;
    let cur = head;
    while(cur) {
      let temp = cur.next;
      cur.next = pre;
      pre = cur;
      cur = temp;
    }
    return pre;
  }
  // 需要深拷贝一份，否则翻转的时候会影响到原链表
  let before = JSON.parse(JSON.stringify(head));
  let rever = reverse(head);
  while(before) {
    if(before.val !== rever.val) {
      return false;
    }
    before = before.next;
    rever = rever.next;
  }
  return true;
};

// 先深拷贝再翻转链表
var isPalindrome = function(head) {
  // 深拷贝链表
  function clone(head) {
    if(head === null)  return null;
    let ans = new ListNode(head.val);
    ans.next = clone(head.next);
    return ans;
  }
  // 翻转链表
  function reverse(head) {
    let pre = null;
    let cur = head;
    while(cur) {
      let temp = cur.next;
      cur.next = pre;
      pre = cur;
      cur = temp;
    }
    return pre;
  }
  let rever = reverse(clone(head));
  while(head) {
    if(head.val !== rever.val) {
      return false;
    }
    head = head.next;
    rever = rever.next;
  }
  return true;
};