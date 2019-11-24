/* 
给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：

二叉树的根是数组中的最大元素。
左子树是通过数组中最大值左边部分构造出的最大二叉树。
右子树是通过数组中最大值右边部分构造出的最大二叉树。
通过给定的数组构建最大二叉树，并且输出这个树的根节点。

示例 ：
输入：[3,2,1,6,0,5]
输出：返回下面这棵树的根节点：

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1
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

 // 类似于先(后)序遍历+中序遍历构建二叉树
var constructMaximumBinaryTree = function(nums) {
  return (function fn(l, r) {
    if (l > r) {
      return null;
    }
    let node = new TreeNode();
    let index = findMax(l ,r);
    node.val = nums[index];
    node.left = fn(l, index - 1);
    node.right = fn(index + 1, r);
    return node;
  })(0, nums.length - 1);

  function findMax(start, end) {
    let max = -Infinity;
    let index = -1;
    for(let i=start; i<=end; i++) {
      if (nums[i] > max) {
        max = nums[i];
        index = i;
      }
    }
    return index;
  }
};