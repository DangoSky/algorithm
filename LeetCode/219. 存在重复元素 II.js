/* 
  给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。
*/


// 暴力破解
var containsNearbyDuplicate = function(nums, k) {
  for(let i=0; i<nums.length; i++) {
    for(let j=i+1; j<=i+k && j<nums.length; j++) {
      if(nums[j] === nums[i]) {
        return true;
      }
    }
  }
  return false;
};


var containsNearbyDuplicate = function(nums, k) {
  // 使用一个对象（或map也可以）来存储每个数组元素的下标
  let obj = {};
  for(let i=0; i<nums.length; i++) {
    let tem = nums[i];
    // 若两个重复元素的下标差小于k则直接返回，否则保存该元素的下标
    if(obj[tem] >= 0 && i - obj[tem] <= k) {
      return true;
    }
    obj[tem] = i;    
  }
  return false;
}
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));