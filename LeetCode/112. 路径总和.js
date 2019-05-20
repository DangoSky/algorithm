/* 
  给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
  说明: 叶子节点是指没有子节点的节点。

  示例: 
  给定如下二叉树，以及目标和 sum = 22，

                5
              / \
              4   8
            /   / \
            11  13  4
          /  \      \
          7    2      1
  返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。
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
 * @param {number} sum
 * @return {boolean}
 */
// 可以先假设一颗空树、只有根结点的树、只有一个根节点和一个叶子结点的树，假设出几颗树后根据这些情况编写递归式和终止条件。
var hasPathSum = function(root, sum) {
  if(root === null) {
    return false;
  }
  if(root.left === null && root.right === null) {
    return sum === root.val;
  }
  // 是 || 才可以递归执行左右子树
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};