/* 
给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。

示例 1:
给定的树 s:

     3
    / \
   4   5
  / \
 1   2
给定的树 t：

   4 
  / \
 1   2
返回 true，因为 t 与 s 的一个子树拥有相同的结构和节点值。

示例 2:
给定的树 s：

     3
    / \
   4   5
  / \
 1   2
    /
   0
给定的树 t：

   4
  / \
 1   2
返回 false。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */



// 直接字符串化两棵树
var isSubtree = function(s, t) {
  return JSON.stringify(s).includes(JSON.stringify(t)) ? true : false;
}


// 递归。比较每个节点的值是否相等，如果相等的话递归比较它的左右子树是否相等。
var isSubtree = function(s, t) {
  function helper(root, t) {
    if (!root && !t)  return true;
    if (!root && t) return false;
    if (root && !t) return false; 
    if (root.val !== t.val)  return false;
    return helper(root.left, t.left) && helper(root.right, t.right);
  }
  function fn(root) {
    if (!root) return false;
    if (helper(root, t)) return true;
    return fn(root.left) || fn(root.right);
  }
  return fn(s); 
}

// 递归。判断每次递归时的树字符串化是否等于 t。注意需要把两根树字符串化后再比较，不然因为地址空间不同即使两棵树长得一样也会得到false
// 第一次想到的方法，比较耗时，还不如直接字符串化两棵树。
var isSubtree = function(s, t) {
  let res = false;
  (function fn(root) {
    if (root === null) {
      return;
    }
    if (JSON.stringify(root) === JSON.stringify(t)) {
      res = true;
      return;
    }
    fn(root.left);
    fn(root.right);
  })(s)
  return res;
};
