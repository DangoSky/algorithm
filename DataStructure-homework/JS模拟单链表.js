/* 
  JS模拟单链表
  api支持：
  插值：insert(targetIndex, ele)  
  查值：getEle(targetIndex)
  查找：find(targetVal)
  删除：remove(targetIndex)
  修改：modify(targetIndex, newVal)
  创建链表：init(arg1, arg2, arg3, arg4...)
  获取长度：length()
  打印链表：toString()
  有序合并两个有序链表（不会影响到原链表）： concat（linkList）
*/

class Node {
  // 初始化结点
  constructor(data = 'headNode', next = null) {
    this.data = data;
    this.next = next;
  }

  // 头节点的下标为0，首元结点的下标为1    
  // 在 targetIndex 位置插入 ele
  insert(targetIndex, ele) {
    let nodeList = this;
    let index = 1;
    while(nodeList) {
      if(index === targetIndex) {
        let newNode = new Node(ele, nodeList.next);
        nodeList.next = newNode;
        return;
      }
      index++;
      nodeList = nodeList.next;
    }
    throw new Error("无法在该位置进行插值操作。");
  }

  // 获取 targetIndex 位置上的值，查找不到则返回 undefined
  getEle(targetIndex) {
    let nodeList = this;
    let index = 0;
    while(nodeList) {
      if(index === targetIndex) {
        return nodeList.data ;
      }
      index++;
      nodeList = nodeList.next;
    }
    // throw new Error("要查找的位置不在该链表之内。");
    return undefined;
  }

  // 查找值为 targetVal 的结点，查找成功则返回该节点的位置，查找失败则返回 false
  find(targetVal) {
    let nodeList = this;
    let index = 0;
    while(nodeList) {
      if(nodeList.data === targetVal) {
        return index;
      }
      index++;
      nodeList = nodeList.next;
    }
    return false;
  }

  // 删除 targetIndex 位置上的值
  remove(targetIndex) {
    let nodeList = this;
    let index = 0;
    while(nodeList) {
      if(nodeList.next === null) {
        throw new Error("要删除的值为空")
      }
      if(index + 1 === targetIndex) {
        let tem = nodeList.next;
        nodeList.next = tem.next;
        tem = null;  // 释放内存
        return;
      }
      index++;
      nodeList = nodeList.next;
    }
    throw new Error("要删除的位置不在该链表之内。");        
  }

  // 将 targetIndex 位置上的值修改为 newVal
  modify(targetIndex, newVal) {
    let nodeList = this;
    let index = 0;
    while(nodeList) {
      if(index === targetIndex) {
        nodeList.data = newVal;
        return;
      }
      index++;
      nodeList = nodeList.next;
    }
    throw new Error("要修改的位置不在该链表之内。");        
  }

  // 将不限个参数依次作为链表的结点创建链表
  init(...arg) {
    let nodeList = this;
    for(let i=0; i<arg.length; i++) {
      let newNode = new Node(arg[i], null);
      nodeList.next = newNode;
      nodeList = nodeList.next;
    }
  }

  // 获取链表的长度
  length() {
    let nodeList = this.next;
    let len = 0;
    while(nodeList) {
      nodeList = nodeList.next;
      len++;
    }
    return len;
  }

  // 打印链表
  toString() {
    let nodeList = this;
    let str = '';
    while(nodeList) {
      str += nodeList.data;
      if(nodeList.next) {
        str += " -> ";
      }
      nodeList = nodeList.next;
    }
    return str;
  }

  // 有序合并两个有序链表（不会影响到原链表）
  concat(l2) {
    let newList = new Node();
    let cur = newList;
    let l1 = this.next;
    l2 = l2.next;
    while(l1 || l2) {
      let newNode = new Node();
      if(l2 === null || (l1 !== null && l1.data <= l2.data)) {
        newNode.data = l1.data;
        newNode.next = null;
        l1 = l1.next;
      }
      else if(l1 === null || (l2 !== null && l2.data < l1.data)) {
        newNode.data = l2.data;
        newNode.next = null;
        l2 = l2.next;
      }
      cur.next = newNode;
      cur = cur.next;
    }
    return newList;
  }
}

module.exports = Node

let linkList = new Node();    // 头节点
linkList.init(-2,5);
let linkList1 = new Node();
linkList1.init(-9,-6,-3,-1,1,6);
console.log(linkList.concat(linkList1).toString());