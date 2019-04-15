/* 
  在大小为 2N 的数组 A 中有 N+1 个不同的元素，其中有一个元素重复了 N 次。
  返回重复了 N 次的那个元素。
*/

var repeatedNTimes = function(A) {
  let res = [];
  let length = A.length;
  for(let i=0; i<length; i++) {
    let tem = A[i];
    res[tem] = res[tem] + 1 || 1;
    if(res[tem] === length / 2) {
      return tem;
    }
  }  
};

var repeatedNTimes = function(A) {
  A.sort((a, b) => a - b);
  for(let i=0, len=A.length; i<len; i++) {
    if(A[i] === A[i+1]) {
      return A[i];
    }
  }  
};
console.log(repeatedNTimes([1, 2, 3, 3]));
console.log(repeatedNTimes([5,1,5,2,5,3,5,4]));