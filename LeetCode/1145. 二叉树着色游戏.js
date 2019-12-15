/* 
有两位极客玩家参与了一场「二叉树着色」的游戏。游戏中，给出二叉树的根节点 root，树上总共有 n 个节点，且 n 为奇数，其中每个节点上的值从 1 到 n 各不相同。
游戏从「一号」玩家开始（「一号」玩家为红色，「二号」玩家为蓝色），最开始时，
「一号」玩家从 [1, n] 中取一个值 x（1 <= x <= n）；
「二号」玩家也从 [1, n] 中取一个值 y（1 <= y <= n）且 y != x。
「一号」玩家给值为 x 的节点染上红色，而「二号」玩家给值为 y 的节点染上蓝色。

之后两位玩家轮流进行操作，每一回合，玩家选择一个他之前涂好颜色的节点，将所选节点一个 未着色 的邻节点（即左右子节点、或父节点）进行染色。
如果当前玩家无法找到这样的节点来染色时，他的回合就会被跳过。
若两个玩家都没有可以染色的节点时，游戏结束。着色节点最多的那位玩家获得胜利 ✌️。
现在，假设你是「二号」玩家，根据所给出的输入，假如存在一个 y 值可以确保你赢得这场游戏，则返回 true；若无法获胜，就请返回 false。
*/

// 玩家一先选择了一个点涂色后，就把整个二叉树分成了三部分（左、右、父）。
// 玩家二只能在这三部分中选择一个节点涂色，如果其中一部分的节点个数超过总节点数的一半（n / 2），即玩家二至少占据了一半的节点。
// 那么玩家二可涂色的节点就比玩家一多，也就是玩家二必赢。
// 所以问题就转换成了求x节点的左子树节点数、右子树节点数、父节点部分节点数（n - 左子树节点数 - 右子树节点数 - 1），这三个是否有一个大于总节点数的一半（n / 2）。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function(root, n, x) {
  function computeSum(root) {
    if (!root) {
      return 0;
    }
    return 1 + computeSum(root.left) + computeSum(root.right);
  }

  function find(root) {
    if (!root) {
      return null;
    }
    if (root.val === x) {
      return root;
    }
    return find(root.left) || find(root.right);
  }

  return (function fn() {
    const xNode = find(root);
    const lSum = computeSum(xNode.left);
    const rSum = computeSum(xNode.right);
    const fSum = n - lSum - rSum - 1;
    const half = Math.floor(n / 2);
    return lSum > half || rSum > half || fSum > half;
  })()
};