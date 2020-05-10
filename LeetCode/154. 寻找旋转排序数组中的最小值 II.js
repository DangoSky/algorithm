/* 
假设按照升序排序的数组在预先未知的某个点上进行了旋转。
( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
请找出其中最小的元素。注意数组中可能存在重复的元素。

示例 1：
输入: [1,3,5]
输出: 1

示例 2：
输入: [2,2,2,0,1]
输出: 0

说明：
这道题是 寻找旋转排序数组中的最小值 的延伸题目。
允许重复会影响算法的时间复杂度吗？会如何影响，为什么？
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

//  题解参考 https://github.com/DangoSky/algorithm/blob/master/%E5%89%91%E6%8C%87Offer/%E9%9D%A2%E8%AF%95%E9%A2%9811.%20%E6%97%8B%E8%BD%AC%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%B0%8F%E6%95%B0%E5%AD%97.js
var findMin = function(nums) {
  for(let i=1; i<nums.length; i++) {
    if (nums[i] < nums[i-1]) {
      return nums[i];
    }
  }
  return nums[0];
};

var findMin = function(nums) {
  let l = 0, r = nums.length - 1;
  while(l < r) {
    const mid = Math.floor((r - l) / 2) + l;
    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else if (nums[mid] < nums[r]) {
      r = mid;
    } else {
      r--;
    }
  }
  return nums[l];
}