/* 
完全二叉树是每一层（除最后一层外）都是完全填充（即，结点数达到最大）的，并且所有的结点都尽可能地集中在左侧。
设计一个用完全二叉树初始化的数据结构 CBTInserter，它支持以下几种操作：
CBTInserter(TreeNode root) 使用头结点为 root 的给定树初始化该数据结构；
CBTInserter.insert(int v) 将 TreeNode 插入到存在值为 node.val = v  的树中以使其保持完全二叉树的状态，并返回插入的 TreeNode 的父结点的值；
CBTInserter.get_root() 将返回树的头结点。

题目意思：在一棵完全二叉树中插入一个节点，使插入后的二叉树还是完全二叉树。
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
 */

// 因为是完全二叉树，所以使用层序遍历，当遍历到第一个没有左/右节点的节点时，就将新节点插在它的左/右节点上。
var CBTInserter = function(root) {
  this.root = root;
};

/** 
 * @param {number} 
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
  let arr = [this.root];
  while(arr.length) {
    let node = arr.shift();
    if(!node.left) {
      node.left = new TreeNode(v);
      return node.val;
    } else if(!node.right) {
      node.right = new TreeNode(v);
      return node.val;
    }
    if (node.left) {
      arr.push(node.left);
    }
    if (node.right) {
      arr.push(node.right);
    }
  }
};


// 给每个节点编号（也就是存入数组中），类似于堆，根据编号找到父节点的位置。
var CBTInserter = function(root) {
  this.arr = [root];
  for(let i=0; i<this.arr.length; i++) {
    if (this.arr[i].left) {
      this.arr.push(this.arr[i].left);
    }
    if (this.arr[i].right) {
      this.arr.push(this.arr[i].right);
    }
  }
};

CBTInserter.prototype.insert = function(v) {
  let len = this.arr.length;
  let node = new TreeNode(v);
  this.arr.push(node);
  let parent = Math.floor((len - 1) / 2);
  if (len % 2 === 0) {
    this.arr[parent].right = node;
  } else {
    this.arr[parent].left = node;
  }
  return this.arr[parent].val;
};

CBTInserter.prototype.get_root = function() {
  return this.arr[0];
};