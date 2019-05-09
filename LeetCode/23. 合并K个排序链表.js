/* 
  合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
  示例:
  输入:
  [
    1->4->5,
    1->3->4,
    2->6
  ]
  输出: 1->1->2->3->4->4->5->6
*/
 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 此题解法同21题，不过我看评论区都是说的优先队列、分治，这题我就不去折腾其他的解法啦，偷懒一回
// 递归
var mergeKLists = function(lists) {
  function fn(l1, l2) {
    if(!l1)  return l2;
    if(!l2)  return l1;
    let ans = new ListNode();
    if(l1.val <= l2.val) {
      ans.val = l1.val;
      ans.next = fn(l1.next, l2);
    }
    else {
      ans.val = l2.val;
      ans.next = fn(l1, l2.next);
    }
    return ans;
  }
  let ans = null;
  for(let i=0; i<lists.length; i++) {
    ans = fn(ans, lists[i]);
  }
  return ans;
}

// 将l2拼接到l1后面，循环的次数是l2的长度
var mergeKLists = function(lists) {
  if(lists.length === 0)  return null;
  function fn(l1, l2) {
    let ans = l1;
    if(ans === null) {
      return l2;
    }
    let cur = ans;
    while(l2) {
      let node = new ListNode();
      // 针对头节点
      if(cur.val >= l2.val) {
        node.val = cur.val;
        node.next = cur.next;
        cur.val = l2.val;
        cur.next = node;
        l2 = l2.next;
      }
      else if(cur.next && l2.val <= cur.next.val) {
        node.val = l2.val;
        node.next = cur.next;
        cur.next = node;
        l2 = l2.next;
      }
      // 针对尾节点
      else if(!cur.next) {
        node.val = l2.val;
        node.next = null;
        cur.next = node;
        l2 = l2.next;
        continue;
      }
      cur = cur.next;
    }
    return ans;
  }
  for(let i=1; i<lists.length; i++) {
    lists[0] = fn(lists[0], lists[i]);
  }
  return lists[0];
};

// 建立一个新链表，循环的次数是l1和l2的长度和
var mergeKLists = function(lists) {
  if(lists.length === 0)  return null;
  function fn(l1, l2) {
    if(!l1) {
      return l2;
    }
    else if(!l2) {
      return l1;
    }
    let newList = new ListNode();
    let cur = newList;
    while(l1 || l2) {
      let newNode = new ListNode();
      if(l2 === null || (l1 !== null && l1.val <= l2.val)) {
        newNode.val = l1.val;
        newNode.next = null;
        l1 = l1.next;
      }
      else if(l1 === null || (l2 !== null && l2.val < l1.val)) {
        newNode.val = l2.val;
        newNode.next = null;
        l2 = l2.next;
      }
      if(newList.val === undefined) {
          newList.val = newNode.val;
          continue;
      }
      cur.next = newNode;
      cur = cur.next;
    }
    return newList;
  }
  let ans = null;
  for(let i=0; i<lists.length; i++) {
    ans= fn(ans, lists[i]);
  }
  return ans;
};