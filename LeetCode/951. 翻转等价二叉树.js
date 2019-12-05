/* 
我们可以为二叉树 T 定义一个翻转操作，如下所示：选择任意节点，然后交换它的左子树和右子树。
只要经过一定次数的翻转操作后，能使 X 等于 Y，我们就称二叉树 X 翻转等价于二叉树 Y。
编写一个判断两个二叉树是否是翻转等价的函数。这些树由根节点 root1 和 root2 给出。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

// 如果当前根节点相等，则不用继续比较直接返回true。如果根节点只有一个为null或者两个根节点值不相等，则直接返回false。
// 否则按当前树的状态递归，和翻转后（左子树和右子树比较，右子树和左子树比较）递归，对两者的递归结果取或即可。
var flipEquiv = function(root1, root2) {
  return (function fn(t1, t2) {
    if (t1 === t2) {
      return true;
    }
    if (t1 === null || t2 === null || t1.val !== t2.val) {
      return false;
    }
    return (fn(t1.left, t2.left) && fn(t1.right, t2.right)) || (fn(t1.left, t2.right) && fn(t1.right, t2.left));
  })(root1, root2)
};
