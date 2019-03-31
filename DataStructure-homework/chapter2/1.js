/* 
  将两个递增的有序链表合并为一个递增的有序链表。
  要求结果链表仍使用原来两个链表的存储空间, 不另外占用其它的存储空间。
  表中不允许有重复的数据。 
*/


let Node = require('../JS模拟单链表.js')
// 先创建两条链表
let nodeList1 = new Node();
nodeList1.init(110, 120, 506);
let nodeList2 = new Node();
nodeList2.init(110, 111);
let len1 = nodeList1.length();
let len2 = nodeList2.length();
let list1 = nodeList1.next;
let list2 = nodeList2.next;
// 合并到 nodeList1 链表上
for(let i=1; i<=len1+len2; i++) {  
  if(list1 && list2) {
    if(list1.data > list2.data) {
      nodeList1.insert(i, list2.data);
      list2 = list2.next;
    }
    else if(list1.data < list2.data) {
      list1 = list1.next;
    }
    else if(list1.data === list2.data) {
      list1 = list1.next;
      list2 = list2.next;
    }
  }
  else if(!list1 && list2) {
    nodeList1.insert(i, list2.data);
    list2 = list2.next;
  }
}
console.log(nodeList1.toString());