/* 
  对链表进行插入排序。
  插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
  每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。
  插入排序算法：
  插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
  每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
  重复直到所有输入数据插入完为止。
  
  示例 1：
  输入: 4->2->1->3
  输出: 1->2->3->4
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

// 跟选择排序差不多
var insertionSortList = function(head) {
  let cur = head;
  let ans = null;
  while(cur) {
    // 先缓存下一个节点信息防止待会被更改了影响循环的进行
    let next = cur.next;
    // mark为false时代表当前节点要插在已排序链表的首部
    // 分为已排序链表为空和已排序链表第一个节点大于当前节点两种情况
    let mark = false;  
    let ansCur = ans;
    while(ans) {
      if(ans.val > cur.val) {
        break;
      }
      if(ansCur.next === null || ansCur.next.val > cur.val) {
        let tem = ansCur.next;
        ansCur.next = cur;
        cur.next = tem;
        mark = true;
        break;
      }
      ansCur = ansCur.next;
    }
    if(!mark) {
      let temp = ans;
      ans = cur;
      cur.next = temp;
    }
    cur = next;
  }
  return ans;
};