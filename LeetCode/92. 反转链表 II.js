/* 
  反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

  说明:
  1 ≤ m ≤ n ≤ 链表长度。

  示例:
  输入: 1->2->3->4->5->NULL, m = 2, n = 4
  输出: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// 使用数组缓存
var reverseBetween = function(head, m, n) {
  let arr = [];
  function fn(cur, operator) {
    let index = 1;
    let i = 0;
    while(cur) {
      if(index >= m && index <= n) {
        operator === "get" ?  arr.unshift(cur.val) : cur.val = arr[i++];
      }
      else if(index > n) {
        break;
      }
      index++;
      cur = cur.next;
    }
  }
  // 获取从 m 到 n 的节点数值
  fn(head, "get");
  // 重新赋值
  fn(head, "set");
  return head;
};