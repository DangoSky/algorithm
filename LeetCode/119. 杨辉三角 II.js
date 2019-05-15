/* 
  给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。在杨辉三角中，每个数是它左上方和右上方的数的和。
  示例:
  输入: 3
  输出: [1,3,3,1]
*/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */

// 先计算前rowIndex行的杨辉三角
var getRow = function(rowIndex) {
  let ans = [];
  for(let i=0; i<=rowIndex; i++) {
    let arr = [];
    for(let j=0; j<i; j++) {
      arr[j] = (j === 0 || j === i-1) ? 1 : ans[i-2][j-1] + ans[i-2][j];
    }
    ans.push(arr);
  }
  return ans[rowIndex];
};