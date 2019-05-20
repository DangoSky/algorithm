/* 
  给定一个二叉树，返回所有从根节点到叶子节点的路径。
  说明: 叶子节点是指没有子节点的节点。

  示例:
  输入:

    1
  /   \
  2     3
  \
    5

  输出: ["1->2->5", "1->3"]
  解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let res = [];
  function fn(root, str) {
    if(root === null)  return;
    // 到达叶子结点后就将得到的字符串路径放入到数组中
    if(root.left === null && root.right === null) {
      res.push(str + root.val);
    }
    str += root.val + "->";
    return fn(root.left, str) || fn(root.right, str);
  }
  fn(root, "");
  return res;
};