/* 
  给定一个链表（链表结点包含一个整型值）的头结点 head。
  同时给定列表 G，该列表是上述链表中整型值的一个子集。
  返回列表 G 中组件的个数，这里对组件的定义为：链表中一段最长连续结点的值（该值必须在列表 G 中）构成的集合。

  示例 1：
  输入: 
  head: 0->1->2->3
  G = [0, 1, 3]
  输出: 2
  解释: 
  链表中,0 和 1 是相连接的，且 G 中不包含 2，所以 [0, 1] 是 G 的一个组件，同理 [3] 也是一个组件，故返回 2。

  示例 2：
  输入: 
  head: 0->1->2->3->4
  G = [0, 3, 1, 4]
  输出: 2
  解释: 
  链表中，0 和 1 是相连接的，3 和 4 是相连接的，所以 [0, 1] 和 [3, 4] 是两个组件，故返回 2。
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
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
  let map = new Map();
  for(let i=0; i<G.length; i++) {
    map.set(G[i], true);
  }
  let ans = 0;
  // 标记是否是连续的组件
  let mark = false;
  while(head) {
    let temp = map.get(head.val);
    // 在 G 中存在该结点，则开始标记是否连续
    if(temp && !mark) {
      mark = true;
    }
    // 在 G 中不存在，且标记已开始则组件数加1
    else if(!temp && mark) {
      ans++;
      mark = false;
    }
    head = head.next;
  } 
  // 若循环结束后仍在标记检查连续的组件，则直接加1
  if(mark) {
    ans++;
  }
  return ans;
};