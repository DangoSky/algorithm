/* 
请考虑一颗二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。
如果有两颗二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。
如果给定的两个头结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。
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


// 先序遍历，记录叶子节点后比较即可。
var leafSimilar = function(root1, root2) {
  function fn(root, str) {
    if (!root) {
      return;
    }
    if (!root.left && !root.right) {
      str.push(root.val);
    }
    fn(root.left, str);
    fn(root.right, str);
  }  
  let arr1 = [];
  let arr2 = [];
  fn(root1, arr1);
  fn(root2, arr2);
  return arr1.join() === arr2.join();
};

// 上个解法是使用数组来记录叶子节点的序列，但这样多耗费了空间。
// 也可以使用字符串来记录，不过因为传字符串给fn，fn对str的修改不会影响到函数外部，所以需要return str
var leafSimilar = function(root1, root2) {
  function fn(root, str) {
    if (!root) {
      return str;
    }
    if (!root.left && !root.right) {
      str += root.val;
    }
    str = fn(root.left, str);
    str = fn(root.right, str);
    return str
  }  
  let str1 = '';
  let str2 = '';
  str1 = fn(root1, str1);
  str2 = fn(root2, str2);
  return str1 === str2;
};

