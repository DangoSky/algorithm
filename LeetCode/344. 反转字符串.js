/* 
  编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
  不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
  你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
*/

var reverseString = function(s) {
  return s.reverse();
};

var reverseString = function(s) {
  let len = Math.ceil(s.length / 2) - 1;
  for(let i=0; i<=len; i++) {
    let tem = s.length - i - 1;
    [s[i], s[tem]] = [s[tem], s[i]];
  }
  return s;
};
console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["H","a","n","n","a","h"]));