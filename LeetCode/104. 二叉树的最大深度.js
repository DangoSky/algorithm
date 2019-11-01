/* 
  给定一个二叉树，找出其最大深度。
  二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
  说明: 叶子节点是指没有子节点的节点。
*/

var maxDepth = function(root) {
  if(root === null) return 0;
  let l = maxDepth(root.left);
  let r = maxDepth(root.right);
  return Math.max(l, r) + 1;
}

var maxDepth = function(root) {
  if(root === null) {
    return 0
  }
  let ans = 0;
  function search(node, i) {
    if(!node.left && !node.right) {
      if(ans < i) {
        ans = i;
      }
      return;
    }
    if(node.left) {
      search(node.left, i+1);
    }
    if(node.right) {
      search(node.right, i+1);
    }
  }
  search(root, 1);
  return ans;
};
