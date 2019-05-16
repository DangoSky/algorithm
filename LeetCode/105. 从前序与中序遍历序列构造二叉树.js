/* 
  根据一棵树的前序遍历与中序遍历构造二叉树。
  注意:
  你可以假设树中没有重复的元素。
  例如，给出
  前序遍历 preorder = [3,9,20,15,7]
  中序遍历 inorder = [9,3,15,20,7]
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
  function build(preL, preR, inL, inR) {
    if(preL > preR || inL > inR) {
      return null;
    }
    let node = new TreeNode(preorder[preL]);
    // 在中序遍历中找出根节点，以此区分左右子树
    let index = 0;
    for(let i=inL; i<=inR; i++) {
      if(inorder[i] === preorder[preL]) {
        index = i;
        break;
      }
    }
    // 左子树的结点数量
    let leftNum = index - inL;
    // 递归构建左右子树
    node.left = build(preL+1, preL+leftNum, inL, index-1);
    node.right = build(preL+leftNum+1, preR, index+1, inR);
    return node;
  }
  return build(0, preorder.length-1, 0, inorder.length-1);  
};


// C++
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
  public:
    TreeNode* create(int preL, int preR, int inL, int inR, vector<int>& preorder, vector<int>& inorder) {
      if(preL > preR || inL > inR) {
        return NULL;
      }
      TreeNode* root = new TreeNode(preorder[preL]);
      root->val = preorder[preL];
      int rootIndex;
      for(int i=inL; i<=inR; i++) {
        if(inorder[i] == preorder[preL]) {
          rootIndex = i;
          break;
        }
      }
      int lchildNum = rootIndex - inL;
      root->left = create(preL+1, preL+lchildNum, inL, rootIndex-1, preorder, inorder);
      root->right = create(preL+lchildNum+1, preR, rootIndex+1, inR, preorder, inorder);
      return root;
    }
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
      return create(0, preorder.size()-1, 0, inorder.size()-1, preorder, inorder);
    }
  };