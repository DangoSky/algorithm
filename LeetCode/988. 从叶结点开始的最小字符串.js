import { EOPNOTSUPP } from "constants";

/* 
给定一颗根结点为 root 的二叉树，书中的每个结点都有一个从 0 到 25 的值，分别代表字母 'a' 到 'z'：值 0 代表 'a'，值 1 代表 'b'，依此类推。
找出按字典序最小的字符串，该字符串从这棵树的一个叶结点开始，到根结点结束。
（小贴士：字符串中任何较短的前缀在字典序上都是较小的：例如，在字典序上 "ab" 比 "aba" 要小。叶结点是指没有子结点的结点。）
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
 * @return {string}
 */

// 递归。记录从根节点到叶子节点的各条路径后，翻转路径序列变成从叶子节点到根节点，和结果序列比较大小。
var smallestFromLeaf = function(root) {
  let res = '{';
  (function fn(root, str) {
    if (!root) {
      return;
    }
    str += String.fromCodePoint(root.val + 97);
    if (!root.left && !root.right) {
      const tem = str.split('').reverse().join('');
      if (res > tem) {
        res = tem;
      }
    }
    fn(root.left, str);
    fn(root.right, str);
  })(root, '')
  return res;
};