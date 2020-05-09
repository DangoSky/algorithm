/* 
输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

例如，给出
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：
    3
   / \
  9  20
    /  \
   15   7
 
限制：0 <= 节点个数 <= 5000
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  function fn(l1, r1, l2, r2) {
    if (l1 > r1 || l2 > r2) {
      return null;
    }
    let mid = 0;
    for(let i=l2; i<=r2; i++) {
      if (inorder[i] === preorder[l1]) {
        mid = i;
        break;
      }
    }
    const leftSum = mid - l2;
    const node = new TreeNode(preorder[l1]);
    node.left = fn(l1 + 1, l1 + leftSum, l2, mid - 1);
    node.right = fn(l1 + leftSum + 1, r1, mid + 1, r2);
    return node;
  }
  return fn(0, preorder.length - 1, 0, inorder.length - 1);
}
