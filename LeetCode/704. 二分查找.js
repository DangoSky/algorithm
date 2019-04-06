/* 
  给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
*/

var search = function(nums, target) {
  let i = 0, j = nums.length;
  while(i < j) {
    let mid = parseInt((j - i) / 2) + i;
    if(nums[mid] < target) {
      i = mid + 1;
    }
    else if(nums[mid] > target) {
      j = mid;
    }
    else {
      return mid;
    }
  }
  return -1;
};
console.log(search([-1,0,3,5,9,12], 2));
console.log(search([-1,0,3,5,9,12], 9));