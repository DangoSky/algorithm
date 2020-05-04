/* 
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

示例 1：
输入：s = "We are happy."
输出："We%20are%20happy."
 
限制：0 <= s 的长度 <= 10000
*/

/**
 * @param {string} s
 * @return {string}
 */

//  replace + 正则表达式
var replaceSpace = function(s) {
  return s.replace(/ /g, '%20');
};

// 使用一个新的字符串，遇到空格就拼接 %20，否则就拼接原来的字符
var replaceSpace = function(s) {
  let res = '';
  for(let i=0; i<s.length; i++) {
    if(s[i] === ' ') {
      res += '%20';
    } else {
      res += s[i];
    }
  }
  return res;
}