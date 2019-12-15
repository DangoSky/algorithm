/* 
给出一个满足下述规则的二叉树：
root.val == 0
如果 treeNode.val == x 且 treeNode.left != null，那么 treeNode.left.val == 2 * x + 1
如果 treeNode.val == x 且 treeNode.right != null，那么 treeNode.right.val == 2 * x + 2
现在这个二叉树受到「污染」，所有的 treeNode.val 都变成了 -1。

请你先还原二叉树，然后实现 FindElements 类：
FindElements(TreeNode* root) 用受污染的二叉树初始化对象，你需要先把它还原。
bool find(int target) 判断目标值 target 是否存在于还原后的二叉树中并返回结果。
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
 */

// 常规递归。
var FindElements = function(root) {
  if (!root) {
    return null;
  }
  root.val = 0;
  (function fn(root) {
    if (!root) {
      return;
    }
    if (root.left) {
      root.left.val = root.val * 2 + 1;
    }
    if (root.right) {
      root.right.val = root.val * 2 + 2;
    }
    fn(root.left);
    fn(root.right);
  })(root)
  this.root = root;
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  return (function fn(root) {
    if (!root) {
      return false;
    }
    if (root.val === target) {
      return true;
    }
    return fn(root.left) || fn(root.right);
  })(this.root)
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */



// 在初始化二叉树的时候，把每个节点值记录到一个对象里，这样在查找的时候就不用再遍历二叉树了。
var FindElements = function(root) {
  if (!root) {
    return null;
  }
  root.val = 0;
  this.mark = {};
  let fn = (root) => {
    if (!root) {
      return;
    }
    if (root.left) {
      root.left.val = root.val * 2 + 1;
      this.mark[root.left.val] = true;
    }
    if (root.right) {
      root.right.val = root.val * 2 + 2;
      this.mark[root.right.val] = true;
    }
    fn(root.left);
    fn(root.right);
  }
  fn(root);
  this.root = root;
};

FindElements.prototype.find = function(target) {
  return !!this.mark[target];
};