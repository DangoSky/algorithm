/* 
  给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。

  示例 1：
  输入：[-4,-1,0,3,10]
  输出：[0,1,9,16,100]
*/

var sortedSquares = function(A) {
  A = A.map((val) => {
    return val ** 2;
  })  
  A.sort((a, b) => {
    return a - b;
  })
  return A;
};

// 双指针
var sortedSquares = function(A) {
  let len = A.length, k = len - 1;
  let i = 0, j = len - 1;
  let arr = [];
  while(i <= j) {
    if(Math.abs(A[i]) > Math.abs(A[j])) {
      arr[k] = A[i] ** 2;
      i++;
      k--;
    }
    else {
      arr[k] = A[j] ** 2;
      j--;
      k--;
    }
  }
  return arr;
};
console.log(sortedSquares([-4,-1,0,3,10]));