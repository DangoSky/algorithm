  /* 
    给你一个链表的头节点 head，请你编写代码，反复删去链表中由 总和 值为 0 的连续节点组成的序列，直到不存在这样的序列为止。删除完毕后，请你返回最终结果链表的头节点。

    你可以返回任何满足题目要求的答案。（注意，下面示例中的所有序列，都是对 ListNode 对象序列化的表示。）

    示例 1：
    输入：head = [1,2,-3,3,1]
    输出：[3,1]
    提示：答案 [1,2,1] 也是正确的。

    示例 2：
    输入：head = [1,2,3,-3,4]
    输出：[1,2,4]

    示例 3：
    输入：head = [1,2,3,-3,-2]
    输出：[1]
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


// 计算各个节点的前缀和。对于前缀和相同的项，说明这两个节点之间的和为0，所以它们中间的部分是可以消除的。
// 比如以 [1, 2, 3, -3, 4] 为例，其前缀和数组为 [1, 3, 6, 3, 7] ，我们发现有两项均为3，则6和第二个3之间的数是可以消除掉的（包括第二个3）
var removeZeroSumSublists = function(head) {
  let sum = 0;
  // 使用map记录前缀和
  let map = new Map();
  // 针对 [0] 的链表
  let res = new ListNode(0);
  res.next = head;
  let cur = res;
  while(cur) {
    sum += cur.val;
    let pre = map.get(sum);
    if(pre === undefined) {
      map.set(sum, cur);
    } else {
      let preSum = sum;
      for(let tem = pre.next; tem !== cur.next; tem = tem.next) {
        preSum += tem.val;
        // 清空中间节点的map记录
        map.set(preSum, undefined);
      }
      // 保留原先的记录，针对 [0, 0] 的链表
      map.set(sum, pre);
      pre.next = cur.next;
    }
    cur = cur.next;
  }
  return res.next;
};