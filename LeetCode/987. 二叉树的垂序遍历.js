/* 
给定二叉树，按垂序遍历返回其结点值。
对位于 (X, Y) 的每个结点而言，其左右子结点分别位于 (X-1, Y-1) 和 (X+1, Y-1)。
把一条垂线从 X = -infinity 移动到 X = +infinity ，每当该垂线与结点接触时，我们按从上到下的顺序报告结点的值（ Y 坐标递减）。
如果两个结点位置相同，则首先报告的结点值较小。
按 X 坐标顺序返回非空报告的列表。每个报告都有一个结点值列表。
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
 * @return {number[][]}
 */

// 先递归计算出每个节点的坐标存入数组arr中。
// 根据垂序遍历的规则，对arr进行排序：y坐标小的放前面；y坐标相同x坐标不同，则x坐标小的在前面；x坐标和y坐标都相同则节点值小的在前面。
// 排完序后根据数组中y坐标不同分做二维数组输出即可。
var verticalTraversal = function(root) {
  let arr = [];

  (function computePosition(root, x, y) {
    if (!root) {
      return;
    }
    arr.push({
      val: root.val,
      x,
      y
    });
    computePosition(root.left, x+1, y-1);
    computePosition(root.right, x+1, y+1);
  })(root, 0, 0);

  (function sort() {
    arr.sort((a, b) => {
      if (a.y === b.y && a.x !== b.x) {
        return a.x - b.x;
      } else if (a.y === b.y && a.x === b.x) {
        return a.val - b.val;
      }
      return a.y - b.y;
    });
  })();

  let res = [];

  (function getAns() {
    let pre = null;
    arr.forEach(item => {
      if (item.y !== pre) {
        res.push([item.val]);
      } else {
        res[res.length-1].push(item.val);
      }
      pre = item.y;
    })
  })()

  return res;
};