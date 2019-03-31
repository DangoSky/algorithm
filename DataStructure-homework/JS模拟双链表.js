/* 
  JS模拟双链表
  api支持：
  插值：insert(targetIndex, ele)  
  查值：getEle(targetIndex)
  查找：find(targetVal)
  删除：remove(targetIndex)
  修改：modify(targetIndex, newVal)
*/

class Node {
  // 初始化结点
  constructor(data = 'headNode', next = null, prior = null) {
    this.data = data;
    this.next = next;
    this.prior = prior;
  }

  // 头节点的下标为0，首元结点的下标为1    
  // 在 targetIndex 位置插入 ele
  insert(targetIndex, ele) {
    let nodeList = this;
    let index = 1;
    while(nodeList) {
      if(index === targetIndex) {
        let newNode = null;
        if(nodeList.next) {
          newNode = new Node(ele, nodeList.next.next, nodeList);
          nodeList.next.next.prior = nodeList;
        }
        else {
          newNode = new Node(ele, null, nodeList);
        }
        nodeList.next = newNode;
        return;
      }
      index++;
      nodeList = nodeList.next;
    }
    throw new Error("无法在该位置进行插值操作。");
  }

  // 获取 targetIndex 位置上的值
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
    throw new Error("要查找的位置不在该链表之内。");
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
        if(tem.next === null) {
          nodeList.next = null;
        }
        else {
          nodeList.next = tem.next;
          tem.next.prior = nodeList;
        }
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
}

let node = new Node();    // 头节点
node.insert(1, 10);
node.insert(2, 20);
node.modify(2, 30);
node.remove(1);
console.log(node);