/* 
  根据一棵树的中序遍历与后序遍历构造二叉树。
  注意:
  你可以假设树中没有重复的元素。
  例如，给出
  中序遍历 inorder = [9,3,15,20,7]
  后序遍历 postorder = [9,15,7,20,3]
  返回如下的二叉树：

      3
    / \
    9  20
      /  \
    15   7
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  function build(l1, r1, l2, r2) {
    if(l1 > r1 || l2 > r2)  return null;
    let index = 0;
    let root = new TreeNode();
    root.val = postorder[r2];
    for(let i=l1; i<=r1; i++) {
      if(inorder[i] === postorder[r2]) {
        index = i;
        break;
      }
    }
    let sum = index - l1;
    root.left = build(l1, index - 1, l2, l2 + sum - 1)
    root.right = build(index + 1, r1, l2 + sum, r2 - 1); 
    return root;
  }
  return build(0, inorder.length - 1, 0, postorder.length - 1);
};