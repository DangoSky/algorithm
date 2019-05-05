/* 
  给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
  你应当保留两个分区中每个节点的初始相对位置。

  示例:
  输入: head = 1->4->3->2->5->2, x = 3
  输出: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 */

// 双指针，一个收集小于x的，一个收集大于等于x的，最后把后者链接到前者上
var partition = function(head, x) {
  let ans1 = new ListNode(), ans2 = new ListNode();
  let list1 = ans1, list2 = ans2;
  while(head) {
    let temp = head.next;
    if(head.val < x) {
      list1.next = head;
      list1 = list1.next; 
    }
    else if(head.val >= x) {
      list2.next = head;
      list2 = list2.next;
    }
    head = temp;
  }
  list1.next = ans2.next;
  list2.next = null;
  return ans1.next;
};

// 先把结点值缓存到两个数组，然后再根据小的数组链接链表，再继续链接大的数组
var partition = function(head, x) {
  let arr1 = [], arr2 = [];
  while(head) {
    head.val < x ? arr1.push(head.val) : arr2.push(head.val);
    head = head.next;
  }
  let ans = new ListNode();
  let cur = ans;
  while(arr1.length) {
    cur.next = new ListNode(arr1.shift());
    cur = cur.next;
  }
  while(arr2.length) {
    cur.next = new ListNode(arr2.shift());
    cur = cur.next;
  }
  return ans.next;
};