/* 
在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为“根”。 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。

计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。

示例 1:
输入: [3,2,3,null,3,null,1]

     3
    / \
   2   3
    \   \ 
     3   1

输出: 7 
解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7.
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

// DP。维护一个数组，分别存储盗取当前节点和不盗取当前节点的最高金额，每次递归都返回这个数组
var rob = function(root) {
  // res[0]为不包括根节点的最大值，res[1]为包括根节点的最大值
  function dfs(root) {
    let res = [];
    if (root === null) return [0, 0];
    let left = dfs(root.left);
    let right = dfs(root.right);
    // 不包含根节点，最大值为两个子树的最大值之和
    res[0] = Math.max(left[0], left[1]) + Math.max(right[0],right[1]);
    // 包含根节点，最大值为两个子树不包含根节点的最大值加上根节点的值
    res[1] = left[0] + right[0] + root.val;
    return res;
  }
  let res = dfs(root);
  return Math.max(res[0], res[1]);
};


// 分别递归出盗取当前节点、盗取左右四个孙节点的金额和，和不盗取根节点（则盗取金额是两个子节点盗取的金额和）做比较，大的就是盗取当前节点所能获得的最大金额
var rob = function(root) {
  return (function fn(root) {
    if(!root) return 0;
    let l = root.left;
    let r = root.right;
    // 取根节点，盗取的金额是当前的节点值+左右孙节点盗取的金额和
    let total = root.val;
    if(l) {
      total += fn(l.left) + fn(l.right);
    }
    if(r) {
      total += fn(r.left) + fn(r.right);
    }
    // 不取根节点的话，则盗取的金额是子节点盗取的金额和
    return Math.max(total, fn(l) + fn(r));
  })(root)
}