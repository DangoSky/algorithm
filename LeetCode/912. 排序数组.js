/* 
  给定一个整数数组 nums，将该数组升序排列。
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// sort
var sortArray = function(nums) {
  return nums.sort((a, b) => a - b);  
};

// 冒泡排序，从后向前遍历。
var sortArray = function(nums) {
  for(let i=nums.length-1; i>0; i--) {
    // 如果一轮比较中没有需要交换的数据，则说明数组已经有序
    let mark = true;
    for(let j=0; j<i; j++) {
      if(nums[j] > nums[j+1]) {
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
        mark = false;
      }
    }
    if(mark)  return nums;
  }
  return nums;
}

// 冒泡排序，从前向后遍历。
var sortArray = function(nums) {
  for(let i=0, len=nums.length; i<len-1; i++) {
    // 如果一轮比较中没有需要交换的数据，则说明数组已经有序
    let mark = true;
    for(let j=0; j<len-i-1; j++) {
      if(nums[j] > nums[j+1]) {
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
        mark = false;
      }
    }
    if(mark)  return nums;
  }
  return nums;
}

// 选择排序
var sortArray = function(nums) {
  for(let i=0, len=nums.length; i<len; i++) {
    for(let j=i+1; j<len; j++) {
      if(nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
}

