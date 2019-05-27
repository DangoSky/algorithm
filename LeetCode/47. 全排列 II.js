/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 和上一题一样，最后用set去重
var permuteUnique = function(nums) {
  let res = [];
  function fn(arr, start) {
    if(start >= arr.length-1)  {
      res.push(arr.slice(0));
      return;
    }
    for(let i=start, len=arr.length; i<len; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]];
      fn(arr, start + 1);
      [arr[start], arr[i]] = [arr[i], arr[start]];
    }
  }  
  fn(nums, 0);
  res.forEach((val, index) => {
    res[index] = val.join(',');
  })
  return [...new Set(res)].map(val => {
    return val.split(',');
  })
};


var permuteUnique = function(nums) {
  let res = [];
  function fn(arr, start) {
    if(start >= arr.length-1)  {
      res.push(arr.slice(0));
      return;
    }
    for(let i=start, len=arr.length; i<len; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]];
      fn(arr, start + 1);
      [arr[start], arr[i]] = [arr[i], arr[start]];
    }
  }  

  fn([...new Set(nums)], 0);
  return res;
};
