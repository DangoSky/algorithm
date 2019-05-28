/* 
  给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

  案例:
  s = "leetcode"
  返回 0.

  s = "loveleetcode",
  返回 2.
*/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  for(let i=0, len=s.length; i<len; i++) {
    if(s.indexOf(s[i]) === s.lastIndexOf(s[i]))  {
      return i;
    }
  }
  return -1;
};


var firstUniqChar = function(s) {
  let mark = [];
  for(let i=0, len=s.length; i<len; i++) {
    mark[s[i]] = mark[s[i]] + 1 || 1;
  }
  for(let i=0, len=s.length; i<len; i++) {
    if(mark[s[i]] === 1)  {
      return i;
    }
  }
  return -1;
}