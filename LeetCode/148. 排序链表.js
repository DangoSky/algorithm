/* 
  在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

  示例 1:
  输入: 4->2->1->3
  输出: 1->2->3->4

  示例 2:
  输入: -1->5->3->4->0
  输出: -1->0->3->4->5
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
// 数组缓存
var sortList = function(head) {
  let cur = head;
  let arr = [];
  while(cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  arr.sort((a, b) => a - b);
  console.log(arr);
  cur = head;
  let index = 0;
  while(cur) {
    cur.val = arr[index++];
    cur = cur.next;
  }
  return head;
};

// 选择排序
var sortList = function(head) {
  let l1 = head;
  while(l1) {
    let l2 = l1;
    while(l2) {
      if(l2.val < l1.val) {
        [l1.val, l2.val] = [l2.val, l1.val];
      }
      l2 = l2.next;
    }
    l1 = l1.next;
  }
  return head;
};