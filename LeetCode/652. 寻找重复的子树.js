/* 
给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。两棵树重复是指它们具有相同的结构以及相同的结点值。

示例 1：
        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
下面是两个重复的子树：

      2
     /
    4
和

    4
因此，你需要以列表的形式返回上述重复子树的根结点。
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
 * @return {TreeNode[]}
 */

// 使用map。以序列化的树作为键，出现的次数作为值记录进map中。
var findDuplicateSubtrees = function(root) {
  let map = new Map();
  let res = [];
  (function fn(root) {
    if(!root) {
      return;
    }
    const str = JSON.stringify(root);
    const val = map.get(str);
    if(!val) {
      map.set(str, 1);
    }
    if (val === 1) {
      res.push(root);
      map.set(str, val+1);
    }
    fn(root.left);
    fn(root.right);
  })(root)
  return res;
};


// 同样是字符串化树，但使用 JSON.stringify 耗时比较多，所以直接使用拼接字符串
var findDuplicateSubtrees = function(root) {
  let map = new Map();
  let res = [];
  (function fn(root) {
    if(!root) {
      return;
    }
    let str = `${root.val}-${fn(root.left)}-${fn(root.right)}`;
    const val = map.get(str);
    if(!val) {
      map.set(str, 1);
    }
    if (val === 1) {
      res.push(root);
      map.set(str, val+1);
    }
    return str;
  })(root)
  return res;
};