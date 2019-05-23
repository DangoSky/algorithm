/* 
  给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
  你可以假设数组中无重复元素。

  示例 1:
  输入: [1,3,5,6], 5
  输出: 2

  示例 2:
  输入: [1,3,5,6], 2
  输出: 1
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
  for(let i=0; i<nums.length; i++) {
    if(nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
};

// 二分
var searchInsert = function(nums, target) {
  let i = 0, j = nums.length;
  while(i <= j) {
    let mid = parseInt(i + (j - i) / 2);
    if(nums[mid] === target) {
      return mid;
    }
    else if(nums[mid] < target) {
      i = mid + 1;
    }
    else {
      j = mid - 1;
    }
  }
  return i;
};

// 插入排序
var searchInsert = function(nums, target) {
  let val = target;
  let temp = nums;
  let j = temp.length - 1;
  while(j >= 0 && val < temp[j]) {
    temp[j+1] = temp[j];
    j--;
  }
  temp[j+1] = val;
  if(val === temp[j])  return j;
  return j+1;
};