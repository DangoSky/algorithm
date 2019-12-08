/* 
给定一个有 N 个结点的二叉树的根结点 root，树中的每个结点上都对应有 node.val 枚硬币，并且总共有 N 枚硬币。
在一次移动中，我们可以选择两个相邻的结点，然后将一枚硬币从其中一个结点移动到另一个结点。(移动可以是从父结点到子结点，或者从子结点移动到父结点。)。
返回使每个结点上只有一枚硬币所需的移动次数。
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
 * @return {number}
 */

// 递归。从底向上，每次都给父节点返回子树的过载量（超出/缺少多少枚硬币），累加左右子树的过载量即可。
// 注意在累加过载量时需要取绝对值，因为过载量可能是负的。
var distributeCoins = function(root) {
  let ans = 0;
  (function fn(root) {
    if (!root) {
      return 0;
    }
    let l = fn(root.left);
    let r = fn(root.right);
    ans += Math.abs(l) + Math.abs(r);
    return root.val + l + r - 1;
  })(root)  
  return ans;
};