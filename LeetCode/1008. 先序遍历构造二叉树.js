/* 
返回与给定先序遍历 preorder 相匹配的二叉搜索树（binary search tree）的根结点。
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
 * @return {TreeNode}
 */

// 将先序遍历升序排序得到中序遍历（平衡二叉树的中序遍历是升序的），题目转化为由先序遍历和中序遍历构造二叉树。
var bstFromPreorder = function(preorder) {
  let inorder = preorder.slice(0);
  inorder.sort((a, b) => a - b);

  return (function fn(l1, r1, l2, r2) {
    if (l1 > r1 || l2 > r2) {
      return null;
    }
    let index = 0;
    for (let i=l2; i<=r2; i++) {
      if (inorder[i] === preorder[l1]) {
        index = i;
        break;
      }
    }
    let lCount = index - l2;  
    let node = new TreeNode(preorder[l1]);
    node.left = fn(l1 + 1, l1 + lCount, l2, index - 1);
    node.right = fn(l1 + lCount + 1, r1, index + 1, r2);
    return node;
  })(0, preorder.length - 1, 0, inorder.length - 1) 
};

// 因为该先序遍历也是平衡二叉树的先序遍历序列，所以第一个大于根节点的值就是右子树开始的地方，它后面的值也都大于根节点。以此划分左右子树的范围。
var bstFromPreorder = function(preorder) {
  return (function fn(l, r) {
    if (l > r) {
      return null;
    }
    // 默认下，右子树的第一个节点不存在，即其他节点都是根节点的左子树，这样就可以给右子树返回null，避免[4, 2]时的错误。
    let firstR = r + 1;
    for(let i=l+1; i<=r; i++) {
      if (preorder[i] > preorder[l]) {
        firstR = i;
        break;
      }
    }
    let node = new TreeNode(preorder[l]);
    node.left = fn(l + 1, firstR - 1);
    node.right = fn(firstR, r);
    return node;
  })(0, preorder.length - 1)
}
