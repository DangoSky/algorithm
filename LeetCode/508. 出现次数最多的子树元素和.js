/* 
给出二叉树的根，找出出现次数最多的子树元素和。一个结点的子树元素和定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。然后求出出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的元素（不限顺序）。

示例 1
输入:

  5
 /  \
2   -3
返回 [2, -3, 4]，所有的值均只出现一次，以任意顺序返回所有值。

示例 2
输入:

  5
 /  \
2   -5
返回 [2]，只有 2 出现两次，-5 只出现 1 次。
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
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  let obj = {}
  function fn(root) {
    if (!root) return 0;
    let l = fn(root.left); // 当前节点的左子树的元素和
    let r = fn(root.right); // 当前节点的右子树的元素和

    let sum = l + r + root.val; // 当前节点的元素和
    obj[sum] = obj[sum] ? obj[sum] + 1 : 1;
    return sum;
  } 
  fn(root);
  let max = 0; // 记录出现的最大次数
  let res = [];
  for (key in obj) {
    if (obj[key] === max) {
      res.push(key);
    } else if (obj[key] > max) {
      res = [];
      res.push(key);
      max = obj[key];
    }
  }
  return res;
};