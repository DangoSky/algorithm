/* 
返回与给定的前序和后序遍历匹配的任何二叉树。pre 和 post 遍历中的值是不同的正整数。

示例：
输入：pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
输出：[1,2,3,4,5,6,7]
提示：
1 <= pre.length == post.length <= 30
pre[] 和 post[] 都是 1, 2, ..., pre.length 的排列
每个输入保证至少有一个答案。如果有多个答案，可以返回其中一个。
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */

// 大致同前/后+中序遍历构建二叉树。后续遍历中倒数第二个元素是右子树的根节点。
// 所以先循环前序遍历序列，找到该根节点的索引为rightIndex，因此可以算出左子树的节点个数是rightIndex-1-l1,进一步可得左右子树的范围
var constructFromPrePost = function(pre, post) {
  // l1和r1是左子树的序列范围，l2和r2是右子树的序列范围
  return (function fn(l1, r1, l2, r2) {
    if (l1 > r1 || l2 > r2) {
      return null;
    }
    let node = new TreeNode(pre[l1]);
    let rightIndex = l1 + 1;
    for(let i=l1+1; i<=r1; i++) {
      if(pre[i] === post[r2-1]) {
        rightIndex = i;
        break;
      }
    }
    // 左子树的元素个数是 rightIndex - 1 - l1 
    node.left = fn(l1 + 1, rightIndex - 1, l2, l2 + rightIndex - l1 - 2);
    node.right = fn(rightIndex, r1, l2 + rightIndex - l1 - 1, r2 - 1);
    return node;
  })(0, pre.length - 1, 0, post.length - 1);
};
