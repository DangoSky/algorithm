/* 
给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

说明： 要求算法时间复杂度为 O(h)，h 为树的高度。

示例:
root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。

一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。
    5
   / \
  4   6
 /     \
2       7

另一个正确答案是 [5,2,6,null,4,null,7]。
    5
   / \
  2   6
   \   \
    4   7
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
 * @param {number} key
 * @return {TreeNode}
 */

// 比较key和根节点，key大于根节点则递归右子树，key小于根节点则递归左子树
// key等于根节点，则判断根节点是否有左右子树，没有左(右)子树的话，则返回右(左)子树替换掉要删除的根节点
// 都有左右子树的话，则寻找左子树中最右边的节点cur（在左子树中最大的节点，用来代替要删除的节点），修改cur的左右子树指向。
// cur右子树指向待删除节点的右子树，左子树指向待删除节点的左子树（注意cur本身可能还有左子树，所以需要把待删除节点的左子树接在cur左子树的后面）
// 还需要注意的是，要断开cur和它的父节点parent，即把它父节点的右子树指向空，防止拼接cur的左子树后形成环
// 本题画图模拟比较容易理解
var deleteNode = function(root, key) {
  function fn(root) {
    if (root === null) return null;
    let l = root.left;
    let r = root.right;
    if (root.val === key) {
      if (l === null) {
        return r;
      } else if (r === null) {
        return l;
      } else {
        let cur = l;
        // 记录cur的父节点
        let parent = cur;
        if (cur.right) {
          // 找到待删除节点最右边的节点cur
          while (cur.right) {
            parent = cur;
            cur = cur.right;
          }
          let cur1 = cur;
          // 循环cur左子树的底部，才好将待删除节点的左子树拼接上去
          while(cur1.left) {
            cur1 = cur1.left;
          }
          cur1.left = l;
        }
        // 注意需要断开cur和parent之间的联系
        parent.right = null;
        cur.right = r;
        return cur;
      }
    } else if (root.val > key) {
      root.left = fn(l);
    } else if (root.val < key) {
      root.right = fn(r);
    }
    return root;
  }
  return fn(root);
}
