/* 
  给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

  示例 1:
  输入: 1->1->2
  输出: 1->2

  示例 2:
  输入: 1->1->2->3->3
  输出: 1->2->3
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

// 常规解法
var deleteDuplicates = function(head) {
  if(head === null) {
    return null;
  }
  let cur = head; 
  while(cur.next) {
    if(cur.val === cur.next.val) {
      cur.next = cur.next.next;
      continue;
    }
    cur = cur.next;
  }
  return head;
};

// 递归
var deleteDuplicates = function(head) {
  if(head === null || head.next === null) {
    return head;
  }
  head.next = deleteDuplicates(head.next);
  if(head.val === head.next.val) {
    head = head.next;
    // 或者
    // head.next = head.next.next;
  }
  return head;
};

// 使用一个数组记录每个节点值出现的次数，判断当前节点的下一个节点值对应的数组值是否大于1，是则删除
var deleteDuplicates = function(head) {
  if(head === null) {
    return null;
  }
  let cur = head; 
  let arr = [];
  arr[head.val] = 1;
  while(cur.next) {
    let temp = cur.next;
    arr[temp.val] = arr[temp.val] + 1 || 1;
    if(arr[temp.val] > 1) {
      cur.next = temp.next;
      continue;
    }
    cur = temp;
  }
  return head;
};