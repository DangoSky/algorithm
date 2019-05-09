/* 
  给出一个链表，每 k 个节点一组进行翻转，并返回翻转后的链表。
  k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么将最后剩余节点保持原有顺序。

  示例 :
  给定这个链表：1->2->3->4->5
  当 k = 2 时，应当返回: 2->1->4->3->5
  当 k = 3 时，应当返回: 3->2->1->4->5

  说明 :
  你的算法只能使用常数的额外空间。
  你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let len = 0;
  // 计算链表长度
  function fn(head) {
    while(head) {
      len++;
      head = head.next;
    }
  }
  fn(head);
  if(len < k || k === 1) {
    return head;
  }
  // 最后有多少个数不需要翻转
  let r = len % k;
  // 记录当前结点的索引，用来判断最后哪些结点不需要翻转
  let index = 1;
  // 标记需要翻转的一组结点中的个数
  let num = 0;
  cur = head;
  // 记录翻转的链表
  let pre = null;
  // 最后结果，初始化为new ListNode(0)是为了避免特殊处理头节点，只需要最后返回ans.next
  let ans = new ListNode(0);
  // 用来循环ans的辅助链表
  let curAns = ans;
  while(cur) {
    let temp = cur.next;
    // 最后不需要翻转的结点
    if(index >= len - r + 1) {
      curAns.next = cur;
      curAns = curAns.next;
    }
    // 需要翻转的一组结点
    else if(num < k) {
      cur.next = pre;
      pre = cur
      num++;
    }
    // 一组结点翻转完后，拼接到ans后面，并重置pre和num
    if(num >= k) {
      curAns.next = pre;
      // 每次拼接完后，需要把curAns循环到尾部才好使下一次拼接也接到尾部去
      let tem = pre;
      while(tem.next) {
        tem = tem.next;
      }
      curAns = tem;
      num = 0;
      pre = null;
    }
    index++;
    cur = temp;
  }
  return ans.next;
};