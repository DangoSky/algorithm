/* 
给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过根结点。
示例 :
给定二叉树

          1
         / \
        2   3
       / \     
      4   5    
返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

注意：两结点之间的路径长度是以它们之间边的数目表示。
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

// 左子树的深度+右子树的深度+根节点 = 一条路径的节点个数，边数等于路径上节点数-1
var diameterOfBinaryTree = function(root) {
  let res = 1;
  (function computedDeep(root) {
    if (root === null) {
      return 0;
    }
    let l = computedDeep(root.left);
    let r = computedDeep(root.right);
    res = Math.max(res, l + r + 1);
    return Math.max(l, r) + 1;
  })(root)
  return res - 1;
};