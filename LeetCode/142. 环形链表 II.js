 /* 
  给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
  为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
  说明：不允许修改给定的链表。


  示例 1：
  输入：head = [3,2,0,-4], pos = 1
  输出：tail connects to node index 1
  解释：链表中有一个环，其尾部连接到第二个节点。
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

// 快慢指针
// 先使用快慢指针找出是否有环
// 有环的话，假设链表起点到入环起点的距离是 a，入环起点到快慢指针交点的距离是 b。
// 因为快指针走过的距离一直都是慢指针的两倍，所以整个环的长度减去 b = a（即交点再到入环起点的距离是 a）。
// 所以只要再让一个指针从链表起点和原先的慢指针同步走，两者相等时就是入环起点（因为两者走的距离都是 a）。
var detectCycle = function(head) {
  if(head === null) return null; 
  let slow = head, fast = head;
  let hasCycle = false;
  while(fast.next !== null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) {
      hasCycle = true;
      break;
    }
  }
  if(!hasCycle)  return null;
  let cur = head;
  while(cur !== slow) {
    cur = cur.next;
    slow = slow.next;
  }
  return cur;
};

// map 缓存 
var detectCycle = function(head) {
  let map = new Map();
  let cur = head;
  while(cur) {
    if(map.get(cur) === true) {
      map.set(cur, 'ans');
      break;
    }
    map.set(cur, true);
    cur = cur.next;
  }
  cur = head;
  while(cur) {
    if(map.get(cur) === 'ans') {
      return cur;
    }
    cur = cur.next;
  }
  return null;
};

// C++
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
// 堆的地址从低到高，而链表内存是顺序申请的，如果有环的话则，head->next的地址会小于head的地址。
class Solution {
  public:
    ListNode *detectCycle(ListNode *head) {
      if(!head || !head->next)  return NULL;
      while(head) {
        // 考虑到可能会有一个结点单独成环，所以需要是<=
        if(head->next <= head) {
          return head->next;
        }
        head = head->next;
      }
      return NULL;
    }
  };