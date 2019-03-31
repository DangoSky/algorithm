/* 
  已知两个链表A和B分别表示两个集合，其元素递增排列。请设计算法求出A与B的交集，并存放于A链表中。
*/


let Node = require('../JS模拟单链表.js')
// 先创建两条链表
let nodeList1 = new Node();
nodeList1.init(110, 120, 506);
let nodeList2 = new Node();
nodeList2.init(110, 120, 510);
let len1 = nodeList1.length();
let list1 = nodeList1.next;
for(let i=1; i<=len1; i++) { 
  if(!nodeList2.find(list1.data)) {
    nodeList1.remove(nodeList1.find(list1.data));
  }
  list1 = list1.next;
}
console.log(nodeList1.toString());
console.log(nodeList2.toString());