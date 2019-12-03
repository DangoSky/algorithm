/*
满二叉树是一类二叉树，其中每个结点恰好有 0 或 2 个子结点。
返回包含 N 个结点的所有可能满二叉树的列表。 答案的每个元素都是一个可能树的根结点。
答案中每个树的每个结点都必须有 node.val=0。
你可以按任何顺序返回树的最终列表。
*/

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */

// 满二叉树的节点数只能是奇数，且如果N为1的话得到的满二叉树只有根节点。假设左子树有leftTreeSum个节点，则右子树有N-1-leftTreeSum个节点。
// 每次递归时都将leftTreeSum+2，将得到的左右子树组合分配并放入结果数组中返回给父节点。
var allPossibleFBT = function(N) {
  return (function fn(sum) {
    let res = [];
    if (sum === 1) {
      return [new TreeNode(0)];
    } else if (sum % 2 === 0) {
      return res;
    }
    let leftTreeSum = 1;
    while (leftTreeSum < sum) {
      let lTree = fn(leftTreeSum);
      let rTree = fn(sum - leftTreeSum - 1);
      lTree.forEach(l => {
        rTree.forEach(r => {
          let node = new TreeNode(0);
          node.left = l;
          node.right = r;
          res.push(node);
        })
      })
      leftTreeSum += 2;
    }
    return res;
  })(N)
};