/* 
给定二叉树的根节点 root，找出存在于不同节点 A 和 B 之间的最大值 V，其中 V = |A.val - B.val|，且 A 是 B 的祖先。
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

// 递归。自顶向下，向子孙节点传递它祖先节点中最大和最小的节点，将当前的节点值分别和两者求最大差值，记录维护这个最大差值就可。
var maxAncestorDiff = function(root) {
  let ans = -1;
  (function fn(root, maxParent, minParent) {
    if (!root) {
      return;
    }
    let temp1 = Math.max(root.val, maxParent);
    let temp2 = Math.min(root.val, minParent);
    ans = Math.max(Math.abs(root.val - maxParent), ans);
    ans = Math.max(Math.abs(root.val - minParent), ans);

    fn(root.left, temp1, temp2);
    fn(root.right, temp1, temp2);
  })(root, root.val, root.val)
  return ans;
};

// 还是递归。和第一种解法的区别在于，此解是先走完整条路径，找出最大节点和最小节点，等到了叶子节点后再计算路径上最大最小值之差。
var maxAncestorDiff = function(root) {
  let ans = -1;
  if (!root) {
    return 0;
  }
  (function fn(root, maxParent, minParent) {
    if (!root) {
      return;
    }
    maxParent = Math.max(root.val, maxParent);
    minParent = Math.min(root.val, minParent);
    if (!root.left && !root.right) {
      ans = Math.max(maxParent - minParent, ans);
    }

    fn(root.left, maxParent, minParent);
    fn(root.right, maxParent, minParent);
  })(root, root.val, root.val)
  return ans;
};
