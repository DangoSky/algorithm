/* 
  如果数组是单调递增或单调递减的，那么它是单调的。
  如果对于所有 i <= j，A[i] <= A[j]，那么数组 A 是单调递增的。 如果对于所有 i <= j，A[i]> = A[j]，那么数组 A 是单调递减的。
  当给定的数组 A 是单调数组时返回 true，否则返回 false。

  示例 1：
  输入：[1,2,2,3]
  输出：true
*/
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let increase = false;
  let decrease = false;
  for(let i=1, len=A.length; i<len; i++) {
    if(A[i] > A[i-1]) increase = true;
    else if(A[i] < A[i-1])  decrease = true;
  }
  return increase && decrease ? false : true;
};

var isMonotonic = function(A) {
  // mark为true表示递减，为false表示递增
  let mark = null;
  for(let i=1, len=A.length; i<len; i++) {
    // 寻找是递增还是递减
    if(mark === null && A[i] === A[i-1]) {
      continue;
    }
    else if(mark === null) {
      mark = A[i] < A[i-1] ? true : false;
    }
    // 判断
    else if(mark === true && A[i] > A[i-1]) {
      return false;
    }
    else if(mark === false && A[i] < A[i-1]) {
      return false;
    }
  }  
  return true;
};

