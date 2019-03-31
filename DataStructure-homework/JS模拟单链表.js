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
}
// 导出 Node
module.exports = Node

// let node = new Node();    // 头节点
// node.insert(1, 10);
// node.init(1, 2, 3, 8, 5);
// node.insert(2, 20);
// node.remove(1);
// node.modify(1, 30);
// console.log(node);