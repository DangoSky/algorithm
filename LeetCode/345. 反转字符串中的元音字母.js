/* 
  编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
*/

var reverseVowels = function(s) {
  function judge(code) {
    return (code === 'a' || code === "e" || code === "i" || code === "o" || code === 'u');
  }
  // 先保存每一个元音字符
  let str = '';
  for(let i=0; i<s.length; i++) {
    if(judge(s[i].toLowerCase())) {
      str += s[i];
    }
  }
  // 再次循环交换元音字符的位置
  let res = '';
  for(let i=0,j=str.length-1; i<s.length; i++) {
    res += judge(s[i].toLowerCase()) ? str[j--] : s[i];
  }
  return res;
};
console.log(reverseVowels("hello"));
console.log(reverseVowels("leetcode"));
console.log(reverseVowels("aA"));



var reverseVowels = function(s) {
  function judge(code) {
    return (code === 'a' || code === "e" || code === "i" || code === "o" || code === 'u');
  }
  let arr = s.split('');
  let i = 0, j = s.length-1;
  while(i < j) {
    let tem1 = arr[i].toLowerCase();
    let tem2 = arr[j].toLowerCase();
    // 双指针，如果两个指针指向的都是元音字符则交换并改变指针指向，否则只改变不是指向元音字符的那个指针。
    if(judge(tem1) && judge(tem2)) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
    else if(!judge(tem2)) {
      j--;
    }
    else if(!judge(tem1)) {
      i++;
    }
  }
  return arr.join('');
};


var reverseVowels = function(s) {
  function judge(code) {
    return (code === 'a' || code === "e" || code === "i" || code === "o" || code === 'u');
  }
  // 使用一个数组来存储从后遍历得到的元音字符
  let arr = [];
  let res = '';
  for(let i=0, j=s.length-1; i<s.length; j--) {
    if(j >= 0 && judge(s[j].toLowerCase())) {
      arr.push(s[j]);
    }
    if(judge(s[i].toLowerCase())) {
      if(arr.length !== 0) {
        res += arr.shift();
        i++;
      }
    }
    else {
      res += s[i];
      i++;
    }
  }
  return res;
};


