/* 
  给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
  将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
  你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

  示例 1:
  给定链表 1->2->3->4, 重新排列为 1->4->2->3.

  示例 2:
  给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */

// 使用双向链表，其中 pre 相当于翻转了的链表
// 注意循环的次数是链表长度的一半，并且在最后一次循环的时候需要把链表尾部指向null，把剩下的节点裁剪掉。
var reorderList = function(head) {
  let cur = head;
  let pre = null;
  let len = 0;
  // 获取双向链表
  while(cur) {
    cur.pre = pre;
    pre = cur;
    cur = cur.next;
    len++;
  }
  len = Math.ceil(len / 2);
  cur = head;
  let curPre = pre;
  while(len--) {
    let temp = cur.next;
    cur.next = curPre;
    curPre.next = len === 0 ? null : temp;
    cur = temp;
    curPre = curPre.pre;
  }
  return head;
};

// 使用数组缓存节点
var reorderList = function(head) {
  let arr = [];
  let index = 0;
  let cur = head;
  while(cur) {
    arr[index] = cur;
    cur = cur.next;
    index++;
  }
  let len = Math.ceil(index / 2);
  let j = index-1;
  cur = head;
  while(len--) {
    let temp = cur.next;
    let next = arr[j--];
    cur.next = next;
    cur = temp;
    next.next = len === 0 ? null : cur;
  }
  return head;
};

// 使用 map 缓存节点
var reorderList = function(head) {
  let map = new Map();
  let index = 0;
  function cache(head) {
    let cur = head;
    while(cur) {
      map.set(index, cur);
      cur = cur.next;
      index++;
    }
  }
  cache(head);
  let len = Math.ceil(index / 2);
  let j = index-1;
  let cur = head;
  while(len--) {
    let temp = cur.next;
    let next = map.get(j--);
    cur.next = next;
    cur = temp;
    next.next = len === 0 ? null : cur;
  }
  return head;
};

// 先深拷贝再翻转链表
// 理论上使用 JSON.parse(JSON.stringify(head)) 也可以深拷贝，但不知道为什么报了栈溢出，所以得递归拷贝
var reorderList = function(head) {
  let len = 0;
  // 翻转链表
  function reverse(head) {
    let cur = head;
    let pre = null;
    while(cur) {
      let temp = cur.next;
      cur.next = pre;
      pre = cur;
      cur = temp;
      len++;
    }
    return pre;
  }
  // 深拷贝链表
  function clone(head) {
    if(head === null)  return null;
    let ans = new ListNode(head.val);
    ans.next = clone(head.next);
    return ans;
  }
  cur = head;
  // 需要深拷贝一份，否则翻转的时候会影响到原链表
  let rev = reverse(clone(head));
  let odd = len % 2;
  len = Math.ceil(len / 2);
  let curRev = rev;
  let ans = head;
  while(len--) {
    let tem1 = cur.next;
    let tem2 = curRev.next;
    // 如果链表个数为奇数的话，最后会出现一个中间数重复，需要特殊判断
    if(len === 0 && odd === 1) {
      cur.next = null;
      break;
    }
    cur.next = curRev;
    cur = tem1;
    curRev.next = len === 0 ? null : cur;
    curRev = tem2;
  }
  return ans;
};