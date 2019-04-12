/* 
  给定一个单词，你需要判断单词的大写使用是否正确。
  我们定义，在以下情况时，单词的大写用法是正确的：

  全部字母都是大写，比如"USA"。
  单词中所有字母都不是大写，比如"leetcode"。
  如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。
  否则，我们定义这个单词没有正确使用大写字母。
*/


var detectCapitalUse = function(word) {
  // num1 表示小数字母的个数， num2表示大写字母的个数
  let num1 = 0, num2 = 0;
  for(let i=0; i<word.length; i++) {
    word[i] >= 'a' ? num1++ : num2++;
    if(num1 >= 1 && num2 >= 1) {
      // 首字母是小写是则直接false
      if(word[0] >= 'a') {
        return false;
      }
      // 首字母是大写是则得等到出现两个大写字母时才false
      else if(num2 >= 2) {
        return false;
      }
    }
  }
  return true;
};
console.log(detectCapitalUse("ffffffffffffffffffffF"));
console.log(detectCapitalUse("FlaG"));
console.log(detectCapitalUse("Leetcode"));