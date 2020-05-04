/* 
  在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

  示例:
  现有矩阵 matrix 如下：

  [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
  给定 target = 5，返回 true。
  给定 target = 20，返回 false。

  限制：
  0 <= n <= 1000
  0 <= m <= 1000
*/


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 从二维数组的右上角开始查找，如果当前数组元素大于 target，则列-1向左查找；小于的话，则行+1，向下查找；等于的话就直接返回；如果查找到边界还没找到的话，说明不存在 target
// 有点像排序二叉树，利用右上角左边的都小于它，下边的都大于它，一次性排除掉一行或一列
// 时间复杂度 O(n+m)
var findNumberIn2DArray = function(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }
  const rowLen = matrix.length;
  const colLen = matrix[0].length;
  let row = 0;
  let col = colLen - 1;
  while(row < rowLen && col >= 0) {
    if(matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++
    }
  }
  return false;
}
