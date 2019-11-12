/* 
  给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。
  说明：
  你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。

  示例 1:
  输入: root = [3,1,4,null,2], k = 1
    3
    / \
  1   4
    \
    2
  输出: 1

  示例 2:
  输入: root = [5,3,6,2,4,null,null,1], k = 3
        5
        / \
      3   6
      / \
    2   4
    /
  1
  输出: 3
  进阶：
  如果二叉搜索树经常被修改（插入/删除操作）并且你需要频繁地查找第 k 小的值，你将如何优化 kthSmallest 函数？
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
 * @param {number} k
 * @return {number}
 */
// 对于二叉搜索树，中序遍历后的序列就是二叉树的升序序列
// 注意不要使用字符串
var kthSmallest = function(root, k) {
  let res = [];
  function print(root) {
    if(root === null) return root;
    print(root.left);
    res.push(root.val);
    print(root.right); 
  }
  print(root);
  return res[k-1];
};

// 不遍历整个二叉树，只遍历到第k小的数
var kthSmallest = function(root, k) {
  let res = 0;
  (function fn(root) {
    if(root === null || k <= 0) {
      return;
    }
    fn(root.left);
    res = k > 0 ? root.val : res;
    k--;
    fn(root.right);
  })(root)
  return res;
}
