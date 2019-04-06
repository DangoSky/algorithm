/* 
  给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。
*/


var backspaceCompare = function(S, T) {
  let len1 = S.length;
  let len2 = T.length;
  let str1 = '';
  let str2 = '';
  for(let i=0, j=0; i<len1 || j<len2; i++, j++) {
    if(i < len1) {
      str1 = S[i] === '#' ? str1.substr(0, str1.length-1) : str1 + S[i];
    }
    if(j < len2) {
      str2 = T[j] === '#' ? str2.substr(0, str2.length-1) : str2 + T[j];
    }
  }  
  console.log(str1 === str2);
  return str1 === str2;
};
backspaceCompare("ab#c", "ad#c");
backspaceCompare("ab##", "c#d#");
