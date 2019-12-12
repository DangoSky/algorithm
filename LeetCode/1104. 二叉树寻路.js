/* 
在一棵无限的二叉树上，每个节点都有两个子节点，树中的节点 逐行 依次按 “之” 字形进行标记。
如下图所示，在奇数行（即，第一行、第三行、第五行……）中，按从左到右的顺序进行标记；
而偶数行（即，第二行、第四行、第六行……）中，按从右到左的顺序进行标记。
给你树上某一个节点的标号 label，请你返回从根节点到该标号为 label 节点的路径，该路径是由途经的节点标号所组成的。
*/

/**
 * @param {number} label
 * @return {number[]}
 */


// 迭代。
// 如果按照原来满二叉树的性质来，节点 label 的父节点是节点 Math.floor(label/2)。
// 观察得到现在节点label的父节点和节点 Math.floor(label/2)是对称的，所以可以通过这个对称的性质计算得到现在的父节点。
// 现在的父节点 = 父节点层的起始节点 + 从第一层到父节点层的所有节点数 - 原来的父节点Math.floor(label/2) 
          //  = 父节点层的起始节点 + 父节点层的节点数 * 2 - 1 - Math.floor(label / 2))。
var pathInZigZagTree = function(label) {
  let res = [];
  let curLevelNodeSum = 1;
  let allNodeSum = 1;
  while(allNodeSum < label) {
    curLevelNodeSum *= 2;
    allNodeSum += curLevelNodeSum;
  }

  while(label >= 1) {
    res.unshift(label);
    curLevelNodeSum /= 2;
    label = curLevelNodeSum + (curLevelNodeSum * 2 - 1 - Math.floor(label / 2));
  }
  return res;
}; 