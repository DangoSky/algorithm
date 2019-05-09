/* 
  给定一个头结点为 root 的链表, 编写一个函数以将链表分隔为 k 个连续的部分。
  每部分的长度应该尽可能的相等: 任意两部分的长度差距不能超过 1，也就是说可能有些部分为 null。
  这k个部分应该按照在链表中出现的顺序进行输出，并且排在前面的部分的长度应该大于或等于后面的长度。
  返回一个符合上述规则的链表的列表。

  举例： 1->2->3->4, k = 5 // 5 结果 [ [1], [2], [3], [4], null ]

  示例 1：
  输入: 
  root = [1, 2, 3], k = 5
  输出: [[1],[2],[3],[],[]]
  解释:
  输入输出各部分都应该是链表，而不是数组。
  例如, 输入的结点 root 的 val= 1, root.next.val = 2, \root.next.next.val = 3, 且 root.next.next.next = null。
  第一个输出 output[0] 是 output[0].val = 1, output[0].next = null。
  最后一个元素 output[4] 为 null, 它代表了最后一个部分为空链表。

  示例 2：
  输入: 
  root = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3
  输出: [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
  解释:
  输入被分成了几个连续的部分，并且每部分的长度相差不超过1.前面部分的长度大于等于后面部分的长度。
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
  let cur = root;
  // 计算链表长度
  let sum = 0;
  while(cur) {
    sum++;
    cur = cur.next;
  }
  // 除数，每个数组元素链表的平均长度
  let d = parseInt(sum / k) || 1;
  // 余数，即有多少个结点需要额外再添加到数组元素上
  let r = sum > k ? sum % k : 0;
  let arr = [];
  cur = root;
  let item = new ListNode(0);
  let curItem = item;
  // 当前数组元素的长度
  let index = 0;
  // 标记数组元素是否已添加额外的结点，每个数组元素最多只能添加一个
  let mark = false;
  while(cur) {
    let temp = cur.next;
    // 数组元素还没达到平均长度
    if(index < d) {
      curItem.next = cur;
      curItem = curItem.next;
      cur.next = null;  
      index++;
      // 可能会添加额外的结点，所以需要提前更新当前的结点
      cur = temp;
    }
    // 数组元素已经达到平均长度，并且可以添加一个额外结点
    if(index >= d && r > 0 && mark === false) {
      // 因为需要把结尾置为null，所以需要先缓存下一个结点
      let next = cur.next;
      curItem.next = cur;
      curItem = curItem.next;
      cur.next = null;  
      index++;
      mark = true;
      r--;
      cur = next;
    }
    // 数组元素已经到达平均长度，将其放入数组中
    if(index >= d) {
      arr.push(item.next);
      item = new ListNode(0);
      curItem = item;
      index = 0;
      mark = false;
     }
  }
  // 如果原链表长度小于k，数组后面补null
  while(sum++ < k) {
    arr.push(null);
  }
  return arr;
};

// 同上面的实现思路，不同的是：提前计算每一个数组元素的链表长度，这样可以少一个if判断，代码简洁了一些
var splitListToParts = function(root, k) {
  let cur = root;
  // 计算链表长度
  let sum = 0;
  while(cur) {
    sum++;
    cur = cur.next;
  }
  // 除数，每个数组元素链表的平均长度
  let d = parseInt(sum / k) || 1;
  // 余数，即有多少个结点需要额外再添加到数组元素上
  let r = sum > k ? sum % k : 0;
  let arr = [];
  cur = root;
  let item = new ListNode(0);
  let curItem = item;
  // 当前数组元素的长度
  let index = 0;
  // 根据余数先计算每个数组元素的长度
  let len = r > 0 ? d + 1 : d;
  r--;
  while(cur) {
    let temp = cur.next;
    // 数组元素还没达到平均长度
    if(index < len) {
      curItem.next = cur;
      curItem = curItem.next;
      cur.next = null;  
      index++;
    }
    // 数组元素已经到达平均长度，将其放入数组中
    if(index >= len) {
      arr.push(item.next);
      item = new ListNode(0);
      curItem = item;
      index = 0;
      len = r > 0 ? d + 1 : d;
      r--;
    }
    cur = temp;
  }
  // 如果原链表长度小于k，数组后面补null
  while(sum++ < k) {
    arr.push(null);
  }
  return arr;
};