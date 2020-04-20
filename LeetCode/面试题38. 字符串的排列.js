/* 
输入一个字符串，打印出该字符串中字符的所有排列。你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

示例:
输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
*/

/**
 * @param {string} s
 * @return {string[]}
 */

// 将第一个元素和后面的元素都分别交换位置，并以此递归下去，就能得到全排列
// 和这个类似 https://github.com/DangoSky/algorithm/blob/master/LeetCode/46.%20%E5%85%A8%E6%8E%92%E5%88%97.js
var permutation = function(s) {
  const res = [];
  function fn(str, start) {
    if (start >= str.length) {
      res.push(str);
    }
    for(let i=start; i<str.length; i++) {
      // 字符串不能通过解构赋值交换元素位置，所以需要麻烦点通过截断来交换位置
      let changeStr = '';
      if (start === i) {
        changeStr = str;
      } else {
        changeStr = str.slice(0, start) + str[i] + str.slice(start+1, i) + str[start] + str.slice(i+1);
      }
      fn(changeStr, start + 1);
    }
  }
  fn(s, 0);
  // 结果记得要去重
  return [...new Set(res)];
};
