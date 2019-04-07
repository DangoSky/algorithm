/* 
  罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
  字符          数值
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000
  例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
  通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
  I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
  X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
  C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
  给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
*/


var romanToInt = function(s) {
  let obj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let res = obj[s[0]];
  for(let i=1; i<s.length; i++) {
    if(obj[s[i]] > obj[s[i-1]]) {
      res += obj[s[i]] - 2 * obj[s[i-1]];
    }
    else {
      res += obj[s[i]];
    }
  }
  return res;
};
console.log(romanToInt('III'));
console.log(romanToInt("MCMXCIV"));



// 使用 Map
var romanToInt = function(s) {
  let map = new Map();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);
  let res = map.get(s[0]);
  for(let i=1; i<s.length; i++) {
    if(map.get(s[i]) > map.get(s[i-1])) {
      res += map.get(s[i]) - 2 * map.get(s[i-1]);
    }
    else {
      res += map.get(s[i]);
    }
  }
  return res;
};
console.log(romanToInt('III'));
console.log(romanToInt("MCMXCIV"));