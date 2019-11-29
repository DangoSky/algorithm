/* 
给定一个二叉搜索树的根结点 root, 返回树中任意两节点的差的最小值。

示例：
输入: root = [4,2,6,1,3,null,null]
输出: 1
解释:
注意，root是树结点对象(TreeNode object)，而不是数组。

给定的树 [4,2,6,1,3,null,null] 可表示为下图:

          4
        /   \
      2      6
     / \    
    1   3  

最小的差值是 1, 它是节点1和节点2的差值, 也是节点3和节点2的差值。
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

// BST中序遍历就是升序了，所以只需要在中序遍历中使用一个变量记录上一个值，将它与当前节点值之差和res比较并维护即可。
var minDiffInBST = function(root) {
  let res = Infinity;
  let pre = null;
  (function fn(root) {
    if(!root) {
      return;
    }
    fn(root.left);
    if (pre !== null) {
      res = Math.min(res, Math.abs(root.val - pre));
    }
    pre = root.val;
    fn(root.right);
  })(root) 
  return res;
};