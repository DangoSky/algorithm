/* 
  将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
  本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

  示例:
  给定有序数组: [-10,-3,0,5,9],
  一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

        0
      / \
    -3   9
    /   /
  -10  5
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// 把中间结点作为根节点，左右两边的结点分贝作为左右子树
var sortedArrayToBST = function(nums) {
  function build(arr, l, r) {
    if(l > r) {
      return null;
    }
    // 中间结点
    let mid = l + Math.floor((r - l) / 2);
    let root = new TreeNode(arr[mid]);
    root.val = arr[mid];
    root.left = build(arr, l, mid-1);
    root.right = build(arr, mid+1, r);
    return root;
  }
  return build(nums, 0, nums.length-1);
}