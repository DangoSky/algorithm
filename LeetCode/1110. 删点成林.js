/* 
给出二叉树的根节点 root，树上每个节点都有一个不同的值。
如果节点值在 to_delete 中出现，我们就把该节点从树上删去，最后得到一个森林（一些不相交的树构成的集合）。
返回森林中的每棵树。你可以按任意顺序组织答案。
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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */

// 递归。如果当前节点是要删除的话，则判断是否是叶子节点，是叶子节点的话直接返回null给父层用于断开两者之间的连接。
// 如果不是叶子节点的话，则递归判断左右子树，并同样也返回null给父层。如果递归返回的结果不是空的话（子树中有有效的节点，如果不对递归结果判断的话，可能得到的子树是空树，导致把空树也加入res中了），则加入结果数组res中。
// （对于这种会修改二叉树结构的，递归函数需要返回一个值给父层，才能修改父节点的子树从而修改二叉树）
var delNodes = function(root, to_delete) {
  let res = [];
  // 记得要把根节点也加入res中
  if (root && !to_delete.includes(root.val)) {
    res.push(root);
  }
  (function fn(root) {
    if (!root) {
      return null;
    }
    if (to_delete.includes(root.val)) {
      // 叶子节点
      if (!root.left && !root.right) {
        return null;
      }
      // 非叶子节点
      let l = fn(root.left);
      let r = fn(root.right);
      if (l) {
        res.push(l);
      }
      if (r) {
        res.push(r);
      }
      return null;
    } else {
      root.left = fn(root.left);
      root.right = fn(root.right);
      return root;
    }
  })(root)
  return res;
};