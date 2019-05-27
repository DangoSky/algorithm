/* 
  给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。
  示例 1:

  输入: 
  [
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]
  输出: 
  [
    [1,0,1],
    [0,0,0],
    [1,0,1]
  ]
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 // 先记录出现0的行数和列数再修改
// 空间复杂度O(n+m)
var setZeroes = function(matrix) {
  let row = [];
  let col = [];
  for(let i=0,len=matrix.length; i<len; i++) {
    let temp = matrix[i];
    for(let j=0; j<temp.length; j++) {
      if(temp[j] === 0)  {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }
  for(let i=0, len=matrix.length; i<len; i++) {
    let temp = matrix[i];
    for(let j=0; j<temp.length; j++) {
      if(row[i] === 1 || col[j] === 1) {
        temp[j] = 0;
      }
    }
  }
  return matrix;
};

// 使用原数组的某一行某一列来存储出现0的行列信息
// 空间复杂度O(1)
var setZeroes = function(matrix) {
  let row = -1, col = -1;
  let rlen = matrix.length;
  let clen = matrix[0].length;
  // 寻找第一个出现的行列
  for(let i=0; i<rlen; i++) {
    for(let j=0; j<clen; j++) {
      if(matrix[i][j] === 0) {
        row = i;
        col = j;
        break;
      }
    }
    if(row !== -1 || col !== -1)  break;
  }
  if(row === -1 || col === -1 )  return matrix;
  // 将其他出现0的行列数标记在row和col中
  for(let i=0; i<rlen; i++) {
    for(let j=0; j<clen; j++) {
      if(matrix[i][j] === 0) {
        matrix[row][j] = 0;
        matrix[i][col] = 0;
      }
    }
  }
  // 将出现0的行列置0
  for(let i=0; i<rlen; i++) {
    if(matrix[i][col] === 0 && i !== row)  {
      for(let j=0; j<clen; j++) {
        matrix[i][j] = 0;
      }
    }
    matrix[i][col] = 0;
  }
  for(let i=0; i<clen; i++) {
    if(matrix[row][i] === 0 && i !== col)  {
      for(let j=0; j<rlen; j++) {
        matrix[j][i] = 0;
      }
    }
    matrix[row][i] = 0;
  }
  return matrix;
}