/* 
  给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

  示例:
  输入: 5
  输出:
  [
       [1],
      [1,1],
     [1,2,1],
    [1,3,3,1],
   [1,4,6,4,1]
  ]
*/


var generate = function(numRows) {
  let ans = [];
  for(let i=1; i<=numRows; i++) {
    let arr = [];
    for(let j=0; j<i; j++) {
      arr[j] = (j === 0 || j === i-1) ? 1 : ans[i-2][j-1] + ans[i-2][j];
    }
    ans.push(arr);
  }
  return ans;
};
console.log(generate(5));