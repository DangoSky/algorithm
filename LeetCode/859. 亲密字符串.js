/* 
  给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 。

  示例 1：
  输入： A = "ab", B = "ba"
  输出： true

  示例 2：
  输入： A = "ab", B = "ab"
  输出： false

  示例 3:
  输入： A = "aa", B = "aa"
  输出： true
*/


var buddyStrings = function(A, B) {
  let len1 = A.length;
  let len2 = B.length;
  // 两个字符串长度不等或长度等于1就直接返回false
  if(len1 !== len2 || len1 === 1) return false;
  let num = 0;
  let diff = [];
  let len = 0;
  for(let i=0; i<len1; i++) {
    if(A[i] !== B[i]) {
      num++;
      diff[len++] = A[i];
      diff[len++] = B[i];
    }
    // 不相等的个数大于2也返回false
    if(num > 2) return false;
  }
  // 不相等的个数等于2并且交换后相等则返回true
  if(num === 2 && (diff[0] == diff[3] && diff[1] === diff[2])) {
     return true;
  }
  // 如果两字符串相等则判断是否有重复的元素，有的话直接返回true，没有的话则返回false
  if(num === 0) {
    let mark = {};
    for(let i=0; i<len1; i++) {
      if(mark[A[i]])  return true;
      else {
        mark[A[i]] = true;
      }
    }
    return false;
  }
  return false;
};
// console.log(buddyStrings("abcaa", "abcbb"));
console.log(buddyStrings("abcd", "badc"));
// console.log(buddyStrings("ab", "ab"));
