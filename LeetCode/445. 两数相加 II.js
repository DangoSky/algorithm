/* 
  给定两个非空链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储单个数字。将这两数相加会返回一个新的链表。
  你可以假设除了数字 0 之外，这两个数字都不会以零开头。

  进阶:
  如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。

  示例:
  输入: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
  输出: 7 -> 8 -> 0 -> 7
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 使用字符串缓存
var addTwoNumbers = function(l1, l2) {
  let cur1 = l1, cur2 = l2;
  let str1 = '', str2 = '';
  // 把两个链表的节点值保存到两个字符串中
  while(cur1 || cur2) {
    if(cur1) {
      str1 += cur1.val;
      cur1 = cur1.next;
    }
    if(cur2) {
      str2 += cur2.val;
      cur2 = cur2.next;
    }
  }
  // 填充两个字符串使它们等长
  let len = Math.max(str1.length, str2.length);
  str1 = str1.padStart(len, 0);
  str2 = str2.padStart(len, 0);
  let carry = 0;
  let pre = null;
  let ans = null;
  // 使用 pre 保存之前的链表，ans 为当前的节点。
  // 对于头节点，ans.next为null，否则为pre
  for(let i=len-1; i>=0; i--) {
    let temp = Number(str1[i]) + Number(str2[i]) + carry;
    carry = parseInt(temp / 10);
    ans = new ListNode(temp % 10);
    ans.next = (pre !== null) ? pre : null;
    pre = ans;
  }
  // 结束后再判断是否有进位
  if(carry) {
    ans = new ListNode(carry);
    ans.next = pre;
  }
  return ans;
};


// 先翻转两个链表再相加
var addTwoNumbers = function(l1, l2) {
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
  l1 = reverse(l1);
  l2 = reverse(l2);
  let carry = 0;
  let ans = null, pre = null;
  while(l1 || l2) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let temp = val1 + val2 + carry;
    carry = parseInt(temp / 10);
    ans = new ListNode(temp % 10);
    ans.next = pre;
    pre = ans;
    if(l1) {
      l1 = l1.next;
    }
    if(l2) {
      l2 = l2.next;
    }
  }
  if(carry) {
    ans = new ListNode(carry);
    ans.next = pre;
  }
  return ans;
};