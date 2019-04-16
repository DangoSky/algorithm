/* 
  国际摩尔斯密码定义一种标准编码方式，将每个字母对应于一个由一系列点和短线组成的字符串， 比如: "a" 对应 ".-", "b" 对应 "-...", "c" 对应 "-.-.", 等等。
  为了方便，所有26个英文字母对应摩尔斯密码表如下：
  [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  给定一个单词列表，每个单词可以写成每个字母对应摩尔斯密码的组合。例如，"cab" 可以写成 "-.-..--..."，(即 "-.-." + "-..." + ".-"字符串的结合)。我们将这样一个连接过程称作单词翻译。
  返回我们可以获得所有词不同单词翻译的数量。

  例如:
  输入: words = ["gin", "zen", "gig", "msg"]
  输出: 2
  解释: 
  各单词翻译如下:
  "gin" -> "--...-."
  "zen" -> "--...-."
  "gig" -> "--...--."
  "msg" -> "--...--."
  共有 2 种不同翻译, "--...-." 和 "--...--.".
*/


var uniqueMorseRepresentations = function(words) {
  let arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let res = [];
  let ans = 0;
  for(let i=0, len=words.length; i<len; i++) {
    let word = words[i];
    let str = '';
    for(let j=0; j<word.length; j++) {
      let tem = word[j].charCodeAt() - 97;
      str += arr[tem];
    }
    if(res[str]) {
      res[str] += 1;
    }
    else {
      res[str] = 1;
      ans++;
    }
  }
  return ans;
};


// 使用 set 去重
var uniqueMorseRepresentations = function(words) {
  let arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let res = [];
  for(let i=0, len=words.length; i<len; i++) {
    let word = words[i];
    let str = '';
    for(let j=0; j<word.length; j++) {
      let tem = word[j].charCodeAt() - 97;
      str += arr[tem];
    }
    res.push(str);
  }
  let t = Array.from(new Set(res));
  return t.length;
};
console.log(uniqueMorseRepresentations( ["gin", "zen", "gig", "msg"]));
console.log(uniqueMorseRepresentations( ['a']));