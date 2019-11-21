/* 
给定一个二叉树，根节点为第1层，深度为 1。在其第 d 层追加一行值为 v 的节点。

添加规则：给定一个深度值 d （正整数），针对深度为 d-1 层的每一非空节点 N，为 N 创建两个值为 v 的左子树和右子树。
将 N 原先的左子树，连接为新节点 v 的左子树；将 N 原先的右子树，连接为新节点 v 的右子树。
如果 d 的值为 1，深度 d - 1 不存在，则创建一个新的根节点 v，原先的整棵树将作为 v 的左子树。

示例 1:
输入: 
二叉树如下所示:
       4
     /   \
    2     6
   / \   / 
  3   1 5   

v = 1

d = 2

输出: 
       4
      / \
     1   1
    /     \
   2       6
  / \     / 
 3   1   5   

注意:
输入的深度值 d 的范围是：[1，二叉树最大深度 + 1]。
输入的二叉树至少有一个节点。
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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */

// 递归。递归到d-1层，修改d-1层根节点的左右子树 
var addOneRow = function(root, v, d) {
  // 当d等于1时，d-1是0不存在，所以需要对d等于1时做特殊处理
  if (d === 1) {
    let newRoot = new TreeNode(v);
    newRoot.left = root;
    return newRoot;
  }
  (function fn(root, deep) {
    if (!root) {
      return;
    }
    if (deep === d - 1) {
      let nodeL = new TreeNode(v);
      let nodeR = new TreeNode(v);
      nodeL.left = root.left;
      nodeR.right = root.right;
      root.left = nodeL;
      root.right = nodeR;
      return;
    }
    fn(root.left, deep + 1);
    fn(root.right, deep + 1);
  })(root, 1);
  return root;
};