/* 
  给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

  示例 1:
  输入: 1->2->3->4->5->NULL, k = 2
  输出: 4->5->1->2->3->NULL
  解释:
  向右旋转 1 步: 5->1->2->3->4->NULL
  向右旋转 2 步: 4->5->1->2->3->NULL

  示例 2:
  输入: 0->1->2->NULL, k = 4
  输出: 2->0->1->NULL
  解释:
  向右旋转 1 步: 2->0->1->NULL
  向右旋转 2 步: 1->2->0->NULL
  向右旋转 3 步: 0->1->2->NULL
  向右旋转 4 步: 2->0->1->NULL
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

// 使用数组缓存
var rotateRight = function(head, k) {
  if(head === null) return null;
  let cur = head;
  let arr = [];
  while(cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  // k很大时会超时，所以根据k以arr.length为一趟循环来减小旋转的次数
  k = k % arr.length;
  // 数组旋转
  while(k--) {
    arr.unshift(arr.pop());
  }
  let ans = new ListNode(0);
  let temp = ans;
  let index = 0;
  while(index < arr.length) {
    temp.next = new ListNode(arr[index++]);
    temp = temp.next;
  }
  return ans.next;
};

// 相当于倒数第k个节点（正数第len-k+1个节点）变成了头节点，第len-k个节点变成了尾节点
var rotateRight = function(head, k) {
  function fn(head) {
    let len = 0;
    while(head) {
      len++;
      head = head.next;
    }
      return len;
  }

  if(k === 0) return head;
  const len = fn(head);
  k = k % len;
  let newHead = head;
  let cur = head;
  for(let i=1; i<=len; i++) {
    let temp = cur.next;
    if(i === len-k) {
      newHead = cur.next;
      cur.next = null;
    }
    if(i === len) {
      cur.next = head;
    }
    cur = temp;   
  }
  return newHead;
};