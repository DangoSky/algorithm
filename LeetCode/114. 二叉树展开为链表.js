/* 
  给定一个二叉树，原地将它展开为链表。
  例如，给定二叉树

      1
    / \
    2   5
  / \   \
  3   4   6
  将其展开为：

  1
  \
    2
    \
      3
      \
        4
        \
          5
          \
            6
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if(root === null)  return root;
  let left = root.left;
  let right = root.right;
  flatten(left);
  flatten(right);
  root.left = null;
  root.right = left;
  // 对于非叶子结点，需要重新赋值root，把右子树拼接到左子树上，否则会打印不出右子树。可以画个图比如 1->2->3 模拟下过程
  while(root.right !== null) {
    root = root.right;
  }
  root.right = right;
};


// 1. 左子树插入到右子树的地方
// 2. 将原来的右子树接到左子树的最右边节点
// 3. 考虑新的右子树的根节点，一直重复上边的过程，直到新的右子树为 null
var flatten = function(root) {
  while(root) {
    let l = root.left;
    if (l !== null) {
      // 获取左子树的最右边节点
      while(l.right) {
        l = l.right;
      }
      l.right = root.right;
      root.right = root.left;
      root.left = null;
    }
    root = root.right;
  }
  return root;
}