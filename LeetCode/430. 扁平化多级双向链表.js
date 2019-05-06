/* 
  您将获得一个双向链表，除了下一个和前一个指针之外，它还有一个子指针，可能指向单独的双向链表。这些子列表可能有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。
  扁平化列表，使所有结点出现在单级双链表中。您将获得列表第一级的头部。

  示例:
  输入:
  1---2---3---4---5---6--NULL
          |
          7---8---9---10--NULL
              |
              11--12--NULL
  输出:
  1-2-3-7-8-11-12-9-10-4-5-6-NULL
*/
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */

// 遇到有child的先把原链表的next保存到一个数组，等所有的child都添加到链表上后再从数组中取出之前保存的链表剩余部分继续拼接
var flatten = function(head) {
  let arr = [];
  let cur = head;
  while(cur) {
    if(cur.child) {
      // 先保存链表剩下的部分，等child都拼接完后再开始拼接
      arr.unshift(cur.next);
      // 将child拼接到当前链表后面
      cur.next = cur.child;
      cur.child.prev = cur;
      cur.child = null;
    }
    // 所有的child都拼接完成了并且有剩余的链表还没有拼接
    else if(cur.next === null && arr.length !== 0) {
      cur.next = arr.shift();
      if(cur.next) {
        cur.next.prev = cur;
      }
    }
    cur = cur.next;
  }
  return head;
};