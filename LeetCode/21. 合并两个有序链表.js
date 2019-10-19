/* 
  将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
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

// 递归
var mergeTwoLists = function(l1, l2) {
  if(!l1)  return l2;
  if(!l2)  return l1;
  let ans = new ListNode();
  if(l1.val <= l2.val) {
    ans = l1;
    ans.next = mergeTwoLists(l1.next, l2);
  }
  else {
    ans = l2;
    ans.next = mergeTwoLists(l1, l2.next);
  }
  return ans;
}

// 建立一个新链表，循环的次数是l1和l2的长度和
var mergeTwoLists = function(l1, l2) {
  let newList = new ListNode(0);
  let cur = newList;
  while(l1 && l2) {
    if(l1.val <= l2.val) {
      cur.next = l1;
      cur = cur.next;
      l1 = l1.next;
    } else {
      cur.next = l2;
      cur = cur.next;
      l2 = l2.next;
    }
  }
  if(!l1) {
    cur.next = l2;
  } else if(!l2) {
    cur.next = l1;
  }
  return newList.next;
};


// 将l2拼接到l1后面，循环的次数是l2的长度
var mergeTwoLists = function(l1, l2) {
  let ans = l1;
  if(ans === null) {
      return l2;
  }
  let cur = ans;
  while(l2) {
    let node = new ListNode();
    // 针对头节点
    if(cur.val >= l2.val) {
      node.val = cur.val;
      node.next = cur.next;
      cur.val = l2.val;
      cur.next = node;
      l2 = l2.next;
    }
    else if(cur.next && l2.val <= cur.next.val) {
      node.val = l2.val;
      node.next = cur.next;
      cur.next = node;
      l2 = l2.next;
    }
    // 针对尾节点
    else if(!cur.next) {
      node.val = l2.val;
      node.next = null;
      cur.next = node;
      l2 = l2.next;
      continue;
    }
    cur = cur.next;
  }
  return ans;
};