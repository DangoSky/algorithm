/* 
在一个 m*n 的二维字符串数组中输出二叉树，并遵守以下规则：

行数 m 应当等于给定二叉树的高度。
列数 n 应当总是奇数。
根节点的值（以字符串格式给出）应当放在可放置的第一行正中间。根节点所在的行与列会将剩余空间划分为两部分（左下部分和右下部分）。你应该将左子树输出在左下部分，右子树输出在右下部分。左下和右下部分应当有相同的大小。即使一个子树为空而另一个非空，你不需要为空的子树输出任何东西，但仍需要为另一个子树留出足够的空间。然而，如果两个子树都为空则不需要为它们留出任何空间。
每个未使用的空间应包含一个空的字符串""。
使用相同的规则输出子树。

示例 1:
输入:
     1
    /
   2
输出:
[["", "1", ""],
 ["2", "", ""]]

示例 2:
输入:
     1
    / \
   2   3
    \
     4
输出:
[["", "", "", "1", "", "", ""],
 ["", "2", "", "", "", "3", ""],
 ["", "", "4", "", "", "", ""]]
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
 * @return {string[][]}
 */

 // 先计算出树的深度和节点个数，以此初始化一个二维数组。再遍历二叉树，类似于构造二叉树，通过左右子树的索引范围递归填充二维数组（使用到一个变量来标记当前节点的深度）
var printTree = function(root) {
  function computedDeep(root) {
    if (!root) {
      return 0;
    }
    return Math.max(computedDeep(root.left), computedDeep(root.right)) + 1;
  }

  let deep = computedDeep(root);
  let count = 2 ** deep - 1;
  let res = Array.from(Array(deep)).map(() => Array(count).fill(''));

  (function fn(node, l, r, curDeep) {
    if (l > r || !node) {
      return;
    }
    let mid = Math.floor(r + l) / 2;
    res[curDeep][mid] = '' + node.val;
    fn(node.left, l, mid - 1, curDeep + 1);
    fn(node.right, mid + 1, r,  curDeep + 1);
  })(root, 0, count - 1, 0)

  return res;
};