/* 给定两个二进制字符串，返回他们的和（用二进制表示）。
输入为非空字符串且只包含数字 1 和 0。

示例 1:
输入: a = "11", b = "1"
输出: "100" */

// 方法一：直接模拟
var addBinary = function(a, b) {
  let lena = a.length;
  let lenb = b.length;
  let str = '';
  let carry = 0;   // 进位
  let tem = 0;
  for(let i=lena-1, j=lenb-1; i>=0 || j>=0 ; i--, j--) {
    // a，b字符串不等长需要判断
    if(i >= 0 && j >= 0) {
      tem = Number(a[i]) + Number(b[j]) + carry;
    }
    else if(i >= 0 && j < 0) {
      tem = Number(a[i]) + carry;
    }
    else if(j >= 0 && i < 0) {
      tem = Number(b[j]) + carry;
    }
    carry = parseInt(tem / 2);
    str += tem % 2;
  }
  // 判断最后还有没有进位
  if(carry !== 0) {
    str += carry;
  }
  // 翻转字符串
  str = str.split('').reverse().join('');
  return str;
};
console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));


// 方法二：先填充两个字符串再模拟
var addBinary = function(a, b) {
  let len = a.length > b.length ? a.length : b.length;
  // 先将两个字符串填充到一样长
  a = a.padStart(len, "0");
  b = b.padStart(len, "0");
  let str = '';
  let carry = 0;   // 进位
  for(let i=len-1; i>=0; i--) {
    let tem = Number(a[i]) + Number(b[i]) + carry; 
    carry = parseInt(tem / 2);
    str += tem % 2;
  }
  // 判断最后还有没有进位
  if(carry !== 0) {
    str += carry;
  }
  // 翻转字符串
  str = str.split('').reverse().join('');
  return str;
};
console.log(addBinary('1', '111'));
console.log(addBinary('1010', '1011'));
