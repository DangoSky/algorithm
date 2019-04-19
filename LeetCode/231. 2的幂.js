/* 
  给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
*/

// 打表
var isPowerOfTwo = function(n) {
  let res = new Map();
  for(let i=1; i<10000000000; i=i*2) {
    res.set(i, true);
  }  
  return res.get(n) ? true : false;
};

// 递归除2
var isPowerOfTwo = function(n) {
  if(n === 1) {
    return true;
  }
  else if(n % 2 === 1 || n === 0) {
    return false;
  }
  else {
    return isPowerOfTwo(n / 2);
  }
};


// 若是2的幂，则其二进制数中只有一个1。使用位运算
var isPowerOfTwo = function(n) {
  if(n <= 0) {
    return false;
  }
  let res = 0;
  while(n) {
    n &= (n-1);   // 去除n最右边的1
    res++;
  }
  return res === 1;
};


// 若是2的幂，则其二进制数中只有一个1。使用indexOf和lastIndexOf
var isPowerOfTwo = function(n) {
  if(n <= 0) {
    return false;
  }
  let arr = n.toString(2).split(''); 
  return arr.indexOf('1') === arr.lastIndexOf('1');
};

var isPowerOfTwo = function(n) {
  if(n <= 0) {
    return false;
  }
  return  n & (n-1) === 0;  // 若二进制数中只有一个1则返回true
};
console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(16777216));