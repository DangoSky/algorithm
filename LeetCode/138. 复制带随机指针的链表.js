/* 
  给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。
  要求返回这个链表的深拷贝。 

  示例：
  输入：
  {"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

  解释：
  节点 1 的值是 1，它的下一个指针和随机指针都指向节点 2 。
  节点 2 的值是 2，它的下一个指针指向 null，随机指针指向它自己。
  
  提示：
  你必须返回给定头的拷贝作为对克隆列表的引用。
*/
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */

// O(n)的空间复杂度，O(n)的时间复杂度。
// 使用map缓存复制的结点，并和原结点对应起来。
var copyRandomList = function(head) {
  let map = new Map();
  let cur = head;
  while(cur !== null) {
    map.set(cur, new Node(cur.val));
    cur = cur.next;
  }
  cur = head;
  map.set(null, null);   // 下面循环的cur.next可能为null
  while(cur !== null) {
    map.get(cur).next = map.get(cur.next);
    map.get(cur).random = map.get(cur.random);
    cur = cur.next;
  }
  return map.get(head);
}

// O(1)的空间复杂度，O(n)的时间复杂度。《剑指offer》第187页。
// 使用三次while循环，第一次在原链表上增加复制的结点，如: 1->1`->2->2`->3->3`->4->4`。
// 第二次循环给复制的结点的random赋值，可以直接定位到原结点.random.next，即赋值结点的random。
// 第三次循环截取出复制的链表，如 1`->2`->3`->4`，即为所求。
var copyRandomList = function(head) {
  function addNode(head) {
    let cur = head;
    while(cur) {
      let temp = cur.next;
      let cloneNode = new Node(cur.val, temp, null);
      cur.next = cloneNode;
      cur = temp;
    }
  }
  function addRandom(head) {
    let cur = head;
    while(cur) {
      let temp = cur.next;
      temp.random = cur.random ? cur.random.next : null;
      cur = temp.next;
    }
  }
  // 截取复制的链表
  // 需要注意的是，因为之前将复制的结点添加到了原链表上，改动了原链表。
  // 所以在截取复制的链表的时候还要顺带还原原链表，否则会报错。
  function getCloneList(head) {
    let cur = head;
    let curHead = head;
    let ans = new Node(0);
    let curAns = ans;
    while(cur) {
      let temp = cur.next;
      // 截取复制的链表
      curAns.next = temp;
      // 还原原链表
      curHead.next = temp.next;
      cur = temp.next;
      curAns = curAns.next;
    } 
    return ans.next;
  }
  
  addNode(head);
  addRandom(head);
  return getCloneList(head);
}