/* 
您需要在二叉树的每一行中找到最大的值。

示例：
输入: 
          1
         / \
        3   2
       / \   \  
      5   3   9 
输出: [1, 3, 9]
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
 * @return {number[]}
 */

// 层序遍历，记录每层的最大值
var largestValues = function(root) {
  if (root === null) {
    return [];
  }
  let res = [];
  let level = [];
  level.push(root);
  let sum = level.length;
  while(level.length) {
    let max = -Infinity;
    level.forEach(item => {
      if (item.val > max) {
        max = item.val;
      }
    })
    res.push(max);
    while(sum--) {
      let node = level.shift();
      if (node.left) {
        level.push(node.left);
      }
      if (node.right) {
        level.push(node.right);
      }
    }
    sum = level.length;
  }
  return res;
};