/* 
  实现 strStr() 函数。
  给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

  示例 1:
  输入: haystack = "hello", needle = "ll"
  输出: 2

  示例 2:
  输入: haystack = "aaaaa", needle = "bba"
  输出: -1
*/


var strStr = function(haystack, needle) {
  let index = haystack.indexOf(needle);
  return index;
};


var strStr = function(haystack, needle) {
  if(haystack === needle || needle.length === 0) return 0;
  for(let i=0; i<haystack.length; i++) {
    if(haystack[i] === needle[0]) {
      for(let j=i, t=0; j<haystack.length && t<needle.length; j++, t++) {
        let mark = haystack[j] === needle[t];
        if(mark) {
          if(t === needle.length - 1) {
            return i;
          }
        }
        else {
          break;
        }
      }
    }
  }
  return -1;
};

// KMP
var strStr = function(haystack, needle) {
  // 计算next数组，next[i]表示str[i]前面字符串的最长公共前后缀
  // 如 abcdabe，next[6]=2，最长公共前后缀是ab。
  function getNext(str) {
    let len = str.length;
    // i表示str的下标
    let i = 0, j = -1;
    let next = [];
    // next[0]前面没有字符串了，所以置为-1
    next[0] = -1;
    // 因为if中是先i++再给next[i]赋值，所以循环到len-1就够了
    while(i < len - 1) {
      if(j === -1 || str[i] === str[j]) {
        i++;
        j++;
        next[i] = j;
      }
      else {
        j = next[j];
      }
    }
    return next;
  }
  function kmp(str, s) {
    let next = getNext(s);
    let len1 = str.length, len2 = s.length;
    let i = 0, j = 0;
    while(i <len1 && j < len2) {
      if(j === -1 || str[i] === s[j]) {
        i++;
        j++;
      }
      else {
        j = next[j];
      }
    }
    // 匹配成功，返回在str中第一次出现s的下标
    if(j === len2)  return i - j;
    // 没有匹配到就返回-1
    return -1;
  }
  return kmp(haystack, needle);
}