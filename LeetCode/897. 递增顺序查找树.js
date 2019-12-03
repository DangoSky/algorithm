/* 
给定一个树，按中序遍历重新排列树，使树中最左边的结点现在是树的根，并且每个结点没有左子结点，只有一个右子结点。

示例 ：
输入：[5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \ 
1        7   9

输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9  
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
 * @return {TreeNode}
 */

// 中序遍历，类似链表连接，用一个变量cur表示当前的节点，修改它的左节点和右节点指向。
var increasingBST = function(root) {
  let head = new TreeNode();
  let cur = head;
  (function fn(root) {
    if (!root) {
      return null;
    }
    fn(root.left);
    cur.left = null;
    cur.right = root;
    cur = root;
    fn(root.right);
  })(root)
  return head.right;
};


// 先序遍历获取节点值存到数组中，再拼接二叉树。
var increasingBST = function(root) {
  let arr = [];
  (function getArr(root) {
    if (!root) {
      return;
    }
    getArr(root.left);
    arr.push(root.val);
    getArr(root.right);
  })(root)

  let ans = new TreeNode();
  cur = ans;
  arr.forEach(item => {
    cur.right = new TreeNode(item);
    cur.left = null;
    cur = cur.right;
  })
  return ans.right;
}