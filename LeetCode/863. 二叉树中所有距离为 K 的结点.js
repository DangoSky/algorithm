/* 
给定一个二叉树（具有根结点 root）， 一个目标结点 target ，和一个整数值 K 。
返回到目标结点 target 距离为 K 的所有结点的值的列表。 答案可以以任何顺序返回。

注意，输入的 "root" 和 "target" 实际上是树上的结点。

提示：
给定的树是非空的，且最多有 K 个结点。
树上的每个结点都具有唯一的值 0 <= node.val <= 500 。
目标结点 target 是树上的结点。
0 <= K <= 1000.
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
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */

// 递归。使用map记录节点的父节点，用来向上寻找节点。
// 从target开始，向左子树、右子树、父节点开始搜索，但需要记录节点是否访问过，否则访问完子树后，又递归找子树的父节点，导致记录到target节点.
var distanceK = function(root, target, K) {
  let map = new Map();  // 记录父节点
  let markObj = {};   // 记录节点是否已经访问过，否则向子树寻找后，又会递归向上找父节点
  let res = []; 

  // 使用map记录每个节点的父节点，方便向上查找
  function helper(root, parent) {
    if (!root) {
      return null;
    }
    map.set(root, parent);
    helper(root.left, root);
    helper(root.right, root);
  }

  // 搜索路径
  function find(root, dis) {
    if (!root || markObj[root.val]) {
      return;
    }
    markObj[root.val] = true;
    if (dis === 0) {
      res.push(root.val);
      return;
    }
    find(root.left, dis - 1);
    find(root.right, dis - 1);
    find(map.get(root), dis - 1);
  }

  helper(root, null);
  find(target, K);
  return res;
};