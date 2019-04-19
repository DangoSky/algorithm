/* 
  斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
  F(0) = 0,   F(1) = 1
  F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
  给定 N，计算 F(N)。
*/

// 打表
var fib = function(N) {
  let arr = [0, 1];
  for(let i=2; i<=50; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }  
  return arr[N];
};

// 递归
var fib = function(N) {
  function fn(n) {
    if(n === 0) {
      return 0;
    }
    else if(n === 1) {
      return 1;
    }
    else {
      return fn(n-1) + fn(n-2);
    }
  }
  return fn(N);
};

// 记忆函数
var fib = function(N) {
  let res = [0, 1];
  if(typeof res[N] === 'number') {
    return res[N];
  }
  function fn(n) {
    if(!typeof res[n] === 'number') {
      res[n] = fn(n-1) + fn(n-2);
    }
    return res[n];
  }
  return (function() {
    res[N] = fn(N);
    return res[N];
  })()
}
console.log(fib(10));


