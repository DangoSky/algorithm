/* 
  报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
  1.     1
  2.     11
  3.     21
  4.     1211
  5.     111221
  1 被读作  "one 1"  ("一个一") , 即 11。
  11 被读作 "two 1s" ("两个一"）, 即 21。
  21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
  给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
  注意：整数顺序将表示为一个字符串。

  示例 1:
  输入: 1
  输出: "1"

  示例 2:
  输入: 4
  输出: "1211"
*/
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let arr = ["0", "1", "11"];
  // 先打表
  function type() {
    let temp = "11";
    for(let i=3; i<=30; i++) {
      // 同一个数字出现的次数
      let sum = 1;
      let str = "";
      for(let j=0; j<temp.length-1; j++) {
        if(temp[j] !== temp[j+1]) {
          str += sum + temp[j];
          if(j + 1 === temp.length - 1) {
            str += "1" + temp[j+1];
          }
          sum = 1;
        }
        else {
          sum++;
          if(j + 1 === temp.length - 1) {
            str += sum + temp[j+1];
          }
        }
      }
      arr.push(str);
      temp = arr[arr.length-1];
    }
  }
  type();
  return arr[n];
};