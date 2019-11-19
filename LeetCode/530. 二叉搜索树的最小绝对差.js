/* 
给定一个所有节点为非负值的二叉搜索树，求树中任意两节点的差的绝对值的最小值。

示例 :
输入:

   1
    \
     3
    /
   2

输出:1

解释:
最小绝对差为1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。
注意: 树中至少有2个节点。
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

// 中序遍历就是升序，比较相邻两个节点的值（使用一个变量来存储上一个节点值）
var getMinimumDifference = function(root) {
  let minGap = Infinity;
  let pre = Infinity;

  (function fn(root) {    
    if (root === null) {
      return;
    }
    fn(root.left);
    minGap = Math.min(Math.abs(root.val - pre), minGap);
    pre = root.val;
    fn(root.right);
  })(root)
  return minGap;
};