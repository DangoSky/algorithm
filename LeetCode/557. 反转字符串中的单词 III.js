/* 
  给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

  示例 1:
  输入: "Let's take LeetCode contest"
  输出: "s'teL ekat edoCteeL tsetnoc" 
*/

// 使用内置的 api
var reverseWords = function(s) {
  let arr = s.split(' ');
  let ans = '';
  for(let i=0, len=arr.length; i<len; i++) {
    let str = arr[i].split('').reverse().join('');
    ans += str;
    if(i !== len-1) {
      ans += ' ';
    }
  }
  return ans;
};

// 原生实现
var reverseWords = function(s) {
  let ans = '';
  for(let i=0, len=s.length; i<len;i++) {
    let tem =  '';
    while(s[i] !== ' ') {
      tem = s[i] + tem;
      i++;
      if(i >= len) {
        break;
      }
    }
    ans += tem + ' ';
  }  
  return ans.substr(0, ans.length-1);
};
console.log(reverseWords("Let's take LeetCode contest"));