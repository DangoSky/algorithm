/* 
  用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

  示例 1：
  输入：
  ["CQueue","appendTail","deleteHead","deleteHead"]
  [[],[3],[],[]]
  输出：[null,null,3,-1]

  示例 2：
  输入：
  ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
  [[],[],[5],[2],[],[]]
  输出：[null,-1,null,null,5,2]

  提示：
  1 <= values <= 10000
  最多会对 appendTail、deleteHead 进行 10000 次调用
*/

// 把 arr1 和 arr2 当做是两个栈，后进先出，所以只能使用 push 和 pop 方法
// 入队的时候，都将数据放到 arr1 里面。
// 出队的时候，如果 arr2 为空，就将 arr1 的所有元素 pop 到 arr2 中，这样 arr2 中的数据顺序就符合先进先出了。
// 如果 arr2 不为空，就直接从 arr2 里取数据，这样就不用每次出队都将 arr1 里的数据放到 arr2 里
var CQueue = function() {
  this.arr1 = [];
  this.arr2 = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.arr1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if(this.arr2.length === 0) {
    while(this.arr1.length) {
      this.arr2.push(this.arr1.pop());
    }
  }
  return this.arr2.length === 0 ?  -1 : this.arr2.pop();
};
