/* 
  给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
  如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
  您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

  示例：
  输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
  输出：7 -> 0 -> 8
  原因：342 + 465 = 807
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

var addTwoNumbers = function(l1, l2) {
  let ans = new ListNode(0);
  let cur = ans;
  let carry = 0;
  while(l1 || l2) {
    let tem = 0;
    if(l1 === null) {
      tem = l2.val + carry;
      l2 = l2.next;
    }
    else if(l2 === null) {
      tem = l1.val + carry;
      l1 = l1.next;
    }
    else {
      tem = l1.val + l2.val + carry;
      l1 = l1.next;
      l2 = l2.next;
    }
    carry = parseInt(tem / 10);
    cur.next = new ListNode(tem % 10);
    cur = cur.next;
  }
  if(carry) {
    cur.next = new ListNode(carry);
  }
  return ans.next;
};

 // 用两个数组先装下两个链表中的值，再对两个数组进行相加后形成链表
var addTwoNumbers = function(l1, l2) {
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
  let ans = new ListNode(0);
  let cur = ans;
  let carry = 0;
  let arr1 = [];
  let arr2 = [];
  while(l1 || l2) {
    if(l1) {
      arr1.push(l1.val);
      l1 = l1.next;
    }
    if(l2) {
      arr2.push(l2.val);
      l2 = l2.next;
    }
  }
  for(let i=0, j=0; i<arr1.length || j<arr2.length; i++, j++) {
    let left = arr1[i] ? arr1[i] : 0;
    let right = arr2[j] ? arr2[j] : 0;
    let tem = left + right + carry;
    carry = parseInt(tem / 10);
    cur.next = new ListNode(tem % 10);
    cur = cur.next;
  }
  if(carry) {
    let newNode = new ListNode(carry);
    cur.next = newNode;
  }
  return ans.next;
};



