/* 
给定一个二叉搜索树和一个目标结果，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。

案例 1:

输入: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9
输出: True
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
 * @param {number} k
 * @return {boolean}
 */

 // 将BST中序遍历成一个升序的数组，使用前后指针求解。
var findTarget = function(root, k) {
  let arr = [];
  (function fn(root) {
    if (root === null) {
      return;
    }
    fn(root.left);
    arr.push(root.val);
    fn(root.right);
  })(root)
  let i = 0, j = arr.length - 1;
  while (i < j) {
    let temp = arr[i] + arr[j];
    if (temp === k) {
      return true;
    } else if (temp > k) {
      j--;
    } else {
      i++;
    }
  }
  return false;
};


// 遍历二叉树，对于每一个节点node，再递归寻找树中是否存在值为target-node.val的节点
var findTarget = function(root, k) {
  function find(root, target) {
    if (!root) {
      return false;
    }
    if (target === root.val) {
      return root;
    } else if (target > root.val) {
      return find(root.right, target);
    } else {
      return find(root.left, target);
    }
  }

  let res = false;
  (function fn(node) {
    if (!node) {
      return;
    }
    if (res) {
      return true;
    }
    let temp = find(root, k - node.val);
    res =  temp && temp!== node; // 不能是同一个节点
    fn(node.left);
    fn(node.right);
  })(root)

  return res;
}
