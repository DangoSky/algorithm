/*
  给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
  说明: 叶子节点是指没有子节点的节点。
  示例:
  给定如下二叉树，以及目标和 sum = 22，
            5
          / \
          4   8
        /   / \
        11  13  4
      /  \    / \
      7    2  5   1
  返回:
  [
    [5,4,11,2],
    [5,8,4,5]
  ] 
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
 * @return {number[][]}
 */
// 可以画个图模拟一下过程
var pathSum = function(root, sum) {
  let res = [];
  function fn(root, sum, temp) {
    if(root === null)  return;
    temp.push(root.val);
    // 到达叶子结点且路径和等于sum
    if(root.left === null && root.right === null && root.val === sum) {
      // 需要拷贝一份再加入res，否则会受后面的pop操作影响
      res.push(temp.slice(0));
      // 将当前结点pop出当前路径，返回上一层走另一条路
      temp.pop();
      return;
    } 
    fn(root.left, sum - root.val, temp);
    fn(root.right, sum - root.val, temp);
    // 将当前结点pop出当前路径，返回上一层走另一条路
    temp.pop();
  }
  fn(root, sum, []);
  return res;
};