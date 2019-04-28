/* 
  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

  有效字符串需满足：
  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。
  注意空字符串可被认为是有效字符串。
*/

// 使用正则将成对的括号替换成空字符。
// 如果替换前后的字符串长度没有改变则退出循环判断字符串是否为空，为空的话就是有效的括号。
var isValid = function(s) {
  do {
    var len = s.length;
    s = s.replace("()", "").replace("[]", "").replace("{}", "");
  } while(s.length !== len)
  return s.length === 0;
};

// 使用栈
var isValid = function(s) {
  let len = s.length;
  if(len % 2)  {
    return false;
  }
  let map = new Map([
    ["(",  ")"],
    ["[", "]"],
    ["{", "}"]
  ]);
  let arr = [];
  for(let i=0; i<len; i++) {
    if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
      arr.unshift(s[i]);
    }
    else if(s[i] === map.get(arr[0])) {
      arr.shift();
    }
    else {
      return false;
    }
  }
  return arr.length === 0 ? true : false;
};
console.log(isValid("]]"));
// console.log(isValid(""));
// console.log(isValid("([)]"));