/*
  给出一个以头节点 head 作为第一个节点的链表。链表中的节点分别编号为：node_1, node_2, node_3, ... 。
  每个节点都可能有下一个更大值（next larger value）：对于 node_i，如果其 next_larger(node_i) 是 node_j.val，那么就有 j > i 且  node_j.val > node_i.val，而 j 是可能的选项中最小的那个。如果不存在这样的 j，那么下一个更大值为 0 。
  返回整数答案数组 answer，其中 answer[i] = next_larger(node_{i+1}) 。
  注意：在下面的示例中，诸如 [2,1,5] 这样的输入（不是输出）是链表的序列化表示，其头节点的值为 2，第二个节点值为 1，第三个节点值为 5 。
  Definition for singly-linked list：
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  示例 1：
  输入：[2,1,5]
  输出：[5,5,0]

  示例 2：
  输入：[2,7,4,3,5]
  输出：[7,0,5,5,0]

  示例 3：
  输入：[1,7,5,1,9,2,5,1]
  输出：[7,9,9,9,0,5,0,0]

 */

 
var nextLargerNodes = function(head) {
  // 先把链表转为数组
  let arr = [];
  while(head) {
    arr.push(head.val);
    head = head.next;
  }
  let len = arr.length;
  let tem = arr.slice();  // 复制一个用来循环的数组
  let res = [];
  let value = -1;  // 保存找到的值
  for(let i=0; i<len; i++) {
    // 判断是否能找到大于当前元素的值，一找到就return
    let judge = tem.some((val) => {
      if(val > arr[i]) {
        value = val;
        return true;
      }
    });
    tem.shift();    // 把当前元素剔出数组
    res[i] = judge ? value : 0;
  }
  return res;
};