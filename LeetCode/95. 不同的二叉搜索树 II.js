/* 
给定一个整数 n，生成所有由 1 ... n 为节点所组成的二叉搜索树。
示例:
输入: 3
输出:
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
解释:
以上的输出对应以下 5 种不同结构的二叉搜索树：

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

var generateTrees = function(n) {
  function fn(start, end) {
    let arr = []; // 表示以start ... end 为根节点所组成的二叉搜索树
    if (start > end) {
      arr.push(null);
    }
    for(let i=start; i<=end; i++) {
      let left = fn(start, i-1); // 以i为根节点时，左子树包含的数为[start, i-1]。所以其左子树的数量就是以 start...i-1 为根节点所组成的二叉搜索树的个数，left就是这样一个数组
      let right = fn(i+1, end);  // 以i为根节点时，右子树包含的数为[i+1, end]。所以其右子树的数量就是以 i+1... end 为根节点所组成的二叉搜索树的个数，right就是这样一个数组
      // 以i为根节点时，其二叉搜索树的个数为 left.length * right.length。
      for(let j=0; j<left.length; j++) {
        for(let t=0; t<right.length; t++) {
          let node = new TreeNode(i);
          node.left = left[j];
          node.right = right[t];
          arr.push(node); // 存储每一种二叉搜索树的情况
        }
      }
    }
    return arr;
  }
  if (n === 0) return [];
  return fn(1, n);
};