/* 
给定一个有 N 个节点的二叉树，每个节点都有一个不同于其他节点且处于 {1, ..., N} 中的值。
通过交换节点的左子节点和右子节点，可以翻转该二叉树中的节点。
考虑从根节点开始的先序遍历报告的 N 值序列。将这一 N 值序列称为树的行程。
（回想一下，节点的先序遍历意味着我们报告当前节点的值，然后先序遍历左子节点，再先序遍历右子节点。）
我们的目标是翻转最少的树中节点，以便树的行程与给定的行程 voyage 相匹配。 
如果可以，则返回翻转的所有节点的值的列表。你可以按任何顺序返回答案。
如果不能，则返回列表 [-1]。
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
 * @param {number[]} voyage
 * @return {number[]}
 */

// 使用变量finished标记是否有匹配，index表示遍历到voyage的当前索引。
// 比较当前的根节点，如果和voyage[index]不相等则表示不匹配。
// 如果左节点值不等于voyage[index+1]而右节点值等于voyage[index+1]，说明可以通过翻转得到匹配的序列
// 如果左节点值和右节点值都不等于voyage[index+1]，说明无法通过翻转得到正确序列，不匹配
// 其他情况下则递归判断左右节点
var flipMatchVoyage = function(root, voyage) {
  let res = [];
  let finished = false;
  let index = 0;

  (function fn(root) {
    if (!root || finished) {
      return;
    }
    if (root.val !== voyage[index]) {
      finished = true;
      return;
    }
    if (root.left && root.right) {
      let l = root.left;
      let r = root.right;
      // 翻转
      if (root.left.val !== voyage[index+1] && root.right.val === voyage[index+1]) {
        root.left = r;
        root.right = l;
        res.push(root.val);
      } else if (root.left.val !== voyage[index+1] && root.right.val !== voyage[index+1]) {
        finished = true;
        return;
      }
    }
    index++;
    fn(root.left);
    fn(root.right);
  })(root)
  return finished ? [-1] : res;
};
