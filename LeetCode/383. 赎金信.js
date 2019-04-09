/* 
  给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串ransom能不能由第二个字符串magazines里面的字符构成。如果可以构成，返回 true ；否则返回 false。
  (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。)

  注意：
  你可以假设两个字符串均只含有小写字母。
  canConstruct("a", "b") -> false
  canConstruct("aa", "ab") -> false
  canConstruct("aa", "aab") -> true
*/


// 分别统计两个字符串中各个字符出现的次数再比较
var canConstruct = function(ransomNote, magazine) {
  let arr1 = [];
  for(let i=0; i<ransomNote.length; i++) {
    let tem = ransomNote[i];
    arr1[tem] = arr1[tem] ? arr1[tem] + 1 : 1;
  }  
  let arr2 = [];
  for(let i=0; i<magazine.length; i++) {
    let tem = magazine[i];
    arr2[tem] = arr2[tem] ? arr2[tem] + 1 : 1;
  }
  for(key in arr1) {
    if(!arr2[key] || arr2[key] < arr1[key]) {
      return false;
    }
  }
  return true;
};
console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));