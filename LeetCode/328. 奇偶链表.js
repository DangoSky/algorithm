/* 
  给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
  请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

  示例 1:
  输入: 1->2->3->4->5->NULL
  输出: 1->3->5->2->4->NULL
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
// 不断变化奇偶节点
var oddEvenList = function(head) {   
  if(!head || !head.next) {
    return head;
  }
  let odd = head;
  let even = head.next;
  let cur = even;
  while(even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next; 
    even = even.next;
  }
  // 将偶数节点的链表链接到奇数节点的链表后面
  odd.next = cur;
  return head;
};

// 数组缓存
var oddEvenList = function(head) {
  let cur = head;
  let arr = [];
  while(cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  let i = 0, j = 1;
  cur = head;
  let index = 1;
  let len = Math.ceil(arr.length / 2);
  while(cur) {
    if(index <= len) {
      cur.val = arr[i];
      i = i + 2;
    }
    else {
      cur.val = arr[j];
      j = j + 2;
    }
    index++;
    cur = cur.next;
  }
  return head;
};