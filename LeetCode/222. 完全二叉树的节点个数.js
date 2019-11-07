/* 
  给出一个完全二叉树，求出该树的节点个数。
  说明：
  完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点。

  示例:
  输入: 
      1
    / \
    2   3
  / \  /
  4  5 6

  输出: 6
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
var countNodes = function(root) {
  let count = 0;
  function fn(root) {
    if(root === null)  return 0;
    count++;
    fn(root.left);
    fn(root.right);
  } 
  fn(root); 
  return count;
};


// 完全二叉树是一棵空树或者它的叶子节点只出在最后两层，若最后一层不满则叶子节点只在最左侧。
// 如果满二叉树的层数为h，则总节点数为：2^h - 1。

// 先计算左右子树的高度，如果两者高度不相等，说明最后一层不满，并且右子树是满二叉树。此时可以通过公式直接得到右子树的节点数，左子树则递归获取。
// 如果两者高度相等，说明左子树是满二叉树。此时可以通过公司直接得到左子树的节点数，右子树则递归获取。
var countNodes = function(root) {
  function computeDepth(root) {
    let res = 0;
    while(root) {
      res++;
      root = root.left;
    }
    return res;
  }

  return (function fn(root) {
    if (root === null) return 0;
    let leftDepth = computeDepth(root.left);
    let rightDepth = computeDepth(root.right);
    if (leftDepth === rightDepth) {
      return fn(root.right) + (1 << leftDepth);
    } else {
      return fn(root.left) + (1 << rightDepth);
    }
  })(root)
};