/* 
  给定一个二叉树，它的每个结点都存放着一个整数值。
  找出路径和等于给定数值的路径总数。
  路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
  二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。

  示例：
  root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

        10
      /  \
      5   -3
    / \    \
    3   2   11
  / \   \
  3  -2   1

  返回 3。和等于 8 的路径有:
  1.  5 -> 3
  2.  5 -> 2 -> 1
  3.  -3 -> 11
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
 * @return {number}
 */

// 一遍递归遍历每一个结点，再一遍递归以当前的结点作为根节点向下寻找路径数
var pathSum = function(root, sum) {
  let res = 0;
  // 递归遍历每个结点
  function recurNode(root, s) {
    if(root === null)  return root;
    getPath(root, s);
    recurNode(root.left, s);
    recurNode(root.right, s);
  }
  // 以当前结点作为根节点递归寻找路径数
  function getPath(root, s) {
    if(root === null)  return 0;
    if(root.val === s)  res++;
    getPath(root.left, s - root.val);
    getPath(root.right, s - root.val);
  }
  recurNode(root, sum);
  return res;
};