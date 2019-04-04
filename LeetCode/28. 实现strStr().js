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
console.log(strStr("mississippi", "issi"));
console.log(strStr("aaa", "a"));