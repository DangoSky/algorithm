/* 
  给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。

  示例：
  输入: ["Hello", "Alaska", "Dad", "Peace"]
  输出: ["Alaska", "Dad"]

  注意：
  你可以重复使用键盘上同一字符。
  你可以假设输入的字符串将只包含字母。
*/
var findWords = function(words) {
  function judge(code) {
    let str1 = "qwertyuiop";
    let str2 = "asdfghjkl";
    let str3 = "zxcvbnm";
    if(str1.includes(code)) {
      return str1;
    }
    else if(str2.includes(code)) {
      return str2;
    }
    else if(str3.includes(code)) {
      return str3;
    }
  }
  let res = [];
  for(let i=0, len=words.length; i<len; i++) {
    let tem = words[i];
    let str = judge(tem[0].toLowerCase());
    let mark = true;
    for(let j=1; j<tem.length; j++) {
      if(!str.includes(tem[j].toLowerCase())) {
        mark = false;
        break;
      }
    }
    if(mark) {
      res.push(tem);
    }
  } 
  return res; 
};
console.log(findWords(["Aasdfghjkl","Qwertyuiop","zZxcvbnm"]));


// 或者也可以使用 map，对同一行的字母赋予同一个值，遍历的时候就查找是否和首字母是同一个值。