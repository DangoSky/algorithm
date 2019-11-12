/* 
序列化是将数据结构或对象转换为一系列位的过程，以便它可以存储在文件或内存缓冲区中，或通过网络连接链路传输，以便稍后在同一个或另一个计算机环境中重建。

设计一个算法来序列化和反序列化二叉搜索树。 对序列化/反序列化算法的工作方式没有限制。 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树。

编码的字符串应尽可能紧凑。

注意：不要使用类成员/全局/静态变量来存储状态。 你的序列化和反序列化算法应该是无状态的。
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let str = '';
  function fn(root) {
    if (root === null)  {
      return '';
    }
    str = str + root.val + ',';
    fn(root.left);
    fn(root.right);
  }
  fn(root);
  return str.slice(0, -1); // 去掉最后的逗号
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data.length === 0) {
    return null;
  }
  let arr = data.split(',');
  function build(start , end) {
    if (start > end) {
      return null;
    }
    let index = start + 1;
    for(let i=start; i<=end; i++) {
      if(arr[i] > arr[start]) {
        index = i;
        break;
      }
    }
    let node = new TreeNode(arr[start]);
    node.left = build(start + 1, index - 1);
    node.right = build(index, end);
    return node;
  }
  return build(0, arr.length - 1);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */