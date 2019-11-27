/* 
给定一个二叉树，编写一个函数来获取这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与满二叉树（full binary tree）结构相同，但一些节点为空。
每一层的宽度被定义为两个端点（该层最左和最右的非空节点，两端点间的null节点也计入长度）之间的长度。

示例 1:
输入: 

          1
         /  
        3    
       / \       
      5   3     

输出: 2
解释: 最大值出现在树的第 3 层，宽度为 2 (5,3)。

示例 2:
输入: 

          1
         / \
        3   2 
       /        
      5      

输出: 2
解释: 最大值出现在树的第 2 层，宽度为 2 (3,2)。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 给每个节点编号，从1开始，只将每层最左边的节点编号加入到数组中，则arr[i-1]是第i层最左边节点的编号
// 将当前的节点编号减去arr[i-1]就是当前的宽度，和最大宽度比较并不断更新即可
var widthOfBinaryTree = function(root) {
  let arr = [];
  let res = 1;
  (function fn(node, curDeep, pos) {
    if (!node) {
      return;
    }
    // 只将每层最左边的节点编号加入数组
    if (curDeep > arr.length) {
      arr.push(pos);
    }
    let temp = pos - arr[curDeep-1] + 1;
    res = temp > res ? temp : res;
    // 不能直接使用 Math.max(res, pos - arr[curDeep-1] + 1)，否则会得到NaN
    fn(node.left, curDeep + 1, pos * 2);
    fn(node.right, curDeep + 1, pos * 2 + 1);
  })(root, 1, 1);
  return res;
};