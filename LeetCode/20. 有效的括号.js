/* 
  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

  有效字符串需满足：
  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。
  注意空字符串可被认为是有效字符串。
*/


var isValid = function(s) {
  let len = s.length;
  if(len % 2)  {
    return false;
  }
  let arr = [];
  for(let i=0; i<len; i++) {
    if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
      arr.unshift(s[i]);
    }
    else if((s[i] === ')' && arr[0] === '(') || (s[i] === ']' && arr[0] === '[') || (s[i] === '}' && arr[0] === '{')) {
      arr.shift();
    }
    else {
      return false;
    }
  }
  return arr.length === 0 ? true : false;
};
// console.log(isValid("]]"));
console.log(isValid(""));
// console.log(isValid("([)]"));