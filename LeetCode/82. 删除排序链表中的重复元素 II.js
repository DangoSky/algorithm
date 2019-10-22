/* 
  给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

  示例 1:
  输入: 1->2->3->3->4->4->5
  输出: 1->2->5

  示例 2:
  输入: 1->1->1->2->3
  输出: 2->3
*/

// pre 记录重复节点的前一个节点
// end 记录重复节点的最后一个节点
var deleteDuplicates = function(head) {
  let cur = head; 
  // 使 pre 等于 null，特殊处理头节点
  let pre = null;
  while(cur && cur.next) {
    if(cur.val === cur.next.val) {
      let end = cur.next;
      while(end.next && end.val === end.next.val) {
        end = end.next;
      }
      if(pre === null) {
        head = end.next;
        cur = head;
      }
      else {
        pre.next = end.next;  // 修改到了 head
        cur = end.next;
      }
    }
    else {
      pre = cur;
      cur = cur.next;
    }  
  }
  return head;
};

// 递归
var deleteDuplicates = function(head) {
  if(head === null || head.next === null) {
    return head;
  }
  if(head.val === head.next.val) {
    while(head.next && head.val === head.next.val) {
      head = head.next;
    }
    return deleteDuplicates(head.next);
  }
  // 每次递归都返回不重复的链表
  head.next = deleteDuplicates(head.next);
  return head;
};

// 使用数组存储每个节点的出现次数再循环删除（需要对头节点做特殊处理）
var deleteDuplicates = function(head) {
  let cur = head; 
  let arr = [];
  while(cur) {
    arr[cur.val] = arr[cur.val] + 1 || 1;
    cur = cur.next;
  }
  cur = head;
  while(cur) {
    // 判断当前节点是否需要删除（针对头节点而言）
    if(arr[cur.val] > 1) {
      head = head.next;
      cur = head;
      continue;
    }
    // 判断下个节点是否需要删除
    if(cur.next && arr[cur.next.val] > 1) {
      cur.next = cur.next.next;
      continue;
    }
    cur = cur.next;
  }
  return head;
};