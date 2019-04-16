var toLowerCase = function(str) {
  let res = '';
  for(let i=0, len=str.length; i<len; i++) {
    res += str[i].toLowerCase();
  }
  return res;
};
console.log(toLowerCase('Hello'));