/* 
  给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
  对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
  你可以返回任何满足上述条件的数组作为答案。

  示例：
  输入：[4,2,5,7]
  输出：[4,5,2,7]
  解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
*/

// 双数组下标
var sortArrayByParityII = function(A) {
  let res = A.slice();
  let index1 = 1, index2 = 0;
  for(let i=0; i<A.length; i++) {
    if(A[i] % 2) {
      res[index1] = A[i];
      index1 += 2;
    }
    else {
      res[index2] = A[i];
      index2 += 2;
    }
  }
  return res;
};
console.log(sortArrayByParityII([4, 2, 5, 7]));
console.log(sortArrayByParityII([517,142]));


// 使用两个数组分别存储奇数和偶数
var sortArrayByParityII = function(A) {
  let arr1 = [], arr2 = [];
  let len = A.length;
  for(let i=0; i<len; i++) {
    if(A[i] % 2) {
      arr1.push(A[i]);
    }
    else {
      arr2.push(A[i]);
    }
  } 
  let arr = [];
  for(let i=0; i<len; i++) {
    arr.push( i % 2 ? arr1.pop() : arr2.pop());
  } 
  return arr;
};


// // 只使用一个数组存储，数组首部存储奇数，数组尾部存储偶数
var sortArrayByParityII = function(A) {
  let mark = [];
  let len = A.length;
  for(let i=0; i<len; i++) {
    A[i] % 2 ? mark.unshift(A[i]) : mark.push(A[i]);
  } 
  let arr = [];
  for(let i=0; i<len; i++) {
    arr.push( i % 2 ? mark.shift() : mark.pop());
  } 
  return arr;
};