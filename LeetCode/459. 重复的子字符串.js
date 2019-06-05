/* 
  给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

  示例 1:
  输入: "abab"
  输出: True
  解释: 可由子字符串 "ab" 重复两次构成。

  示例 2:
  输入: "aba"
  输出: False

  示例 3:
  输入: "abcabcabcabc"
  输出: True
  解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let len = s.length;
  let half = parseInt(len / 2);
  // i 表示子串的长度，最多为half
  for(let i=0; i<=half; i++) {
    // 如果有余数则该子串一定不能构成字符串s
    if(len % i !== 0)  continue;
    let j;
    // 以i为一循环，两个位置上的数得相等，一有不相等的则马上退出循环
    for(j=i; j<len; j++) {
      if(s[j] !== s[j % i])  break;
    }
    if(j === len)  return true;
  }
  return false;
};