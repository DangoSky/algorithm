/* 
  给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。
*/


// 使用sort排序，O(nlogN)
var thirdMax = function(nums) {
  let arr = [...new Set(nums)];
  arr = arr.sort((a, b) => {
    return b - a;
  })  
  if(arr.length < 3) {
    return arr[0];
  }
  else {
    return arr[2];
  }
};


// 使用三个变量分别维护第一二三大的数。O(n)
var thirdMax = function(nums) {
  let arr = [...new Set(nums)];
  if(arr.length < 3) {
    return arr.length === 1 ? arr[0] : Math.max(arr[0], arr[1]);
  }
  let one = -Infinity, two = -Infinity, three = -Infinity;
  for(let i=0; i<arr.length; i++) {
    if(arr[i] > one) {
      [one, two, three] = [arr[i], one, two];
    }
    else if(arr[i] > two) {
      [two, three] = [arr[i], two];
    }
    else if(arr[i] > three) {
      three= arr[i];
    }
  }
  return three;
};
console.log(thirdMax([2,2,3,1]));
console.log(thirdMax([2,3,1]));
console.log(thirdMax([1,1,1]));
