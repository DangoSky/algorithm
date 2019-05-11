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

// before为开始翻转的前一个结点
// pre为要开始翻转的结点
// next为pre的下一个结点
// 将pre从m不断推移到n，把它连接到next后面并修改它的next指向，再将next连接到before后面。循环这个过程即可
// 例如 1->2->3->4->5->NULL,m=2,n=4。
// 将pre(2)放到next(3)后面，就成了 3->2，改变pre(2)的next指向就成了3-2->4->5->NULL。再把next(3)链接到before(1)后面，1->3-2->4->5->NULL，以此类推。
var reverseBetween = function(head, m, n) {
  // 为了避免对头结点进行特殊处理，我们通常是建立一个新结点，并把它指向head，最后再返回它的.next就可以。
  // 此处是为了避免对从第一个结点就开始翻转的特殊处理
  let dummy = new ListNode(0);
  dummy.next = head;
  let before = dummy;
  for(let i=1; i<m; i++) {
    before = before.next;
  }
  let pre= before.next;
  for(let i=m; i<n; i++) {
    let next = pre.next;
    pre.next = next.next;
    next.next = before.next;
    before.next = next;
  }
  return dummy.next;
}