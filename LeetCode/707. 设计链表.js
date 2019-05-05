/* 
  设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。

  在链表类中实现这些功能：
  get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
  addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
  addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
  addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。
  deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
  
  示例：
  MyLinkedList linkedList = new MyLinkedList();
  linkedList.addAtHead(1);
  linkedList.addAtTail(3);
  linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
  linkedList.get(1);            //返回2
  linkedList.deleteAtIndex(1);  //现在链表是1-> 3
  linkedList.get(1);            //返回3
*/
/**
 * Initialize your data structure here.
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class MyLinkedList {
  constructor() {
    this.head = null;
  }
/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
  get(index) {
    let i = 0;
    let cur = this.head;
    while(cur) {
      if(i === index) {
        return cur.val;
      }
      i++;
      cur = cur.next;
    }
    return -1;
  };

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
  addAtHead(val) {
    let temp = this.head;
    this.head = new Node(val);
    this.head.next = temp;
  };

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
  addAtTail(val) {
    let cur = this.head;
    while(cur) {
      if(cur.next === null) {
        cur.next = new Node(val);
        return;
      }
      cur = cur.next;
    }
    this.head = new Node(val);
  };

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
  addAtIndex(index, val) {
    if(index <= 0) {
      return this.addAtHead(val);
    }
    let i = 0;
    let cur = this.head;
    while(cur) {
      if(i + 1 === index) {
        let temp = cur.next;
        let node = new Node(val);
        cur.next = node;
        node.next = temp;
        return;
      }
      i++;
      cur = cur.next;
    }
  };
/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
  deleteAtIndex(index) {
    let cur = this.head;
    if(cur === null) {
      return null;
    }
    if(index === 0) {
      this.head = cur.next;
      return;
    }
    let i = 0;
    while(cur) {
      if(i + 1 === index && cur.next) {
        // if(i + 1 === index) {
        cur.next = cur.next.next;
        return this;
      }
      cur = cur.next;
      i++;
    }
  };
}
/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */