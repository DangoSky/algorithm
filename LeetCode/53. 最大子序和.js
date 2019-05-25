/* 
  给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

  示例:
  输入: [-2,1,-3,4,-1,2,1,-5,4],
  输出: 6
  解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

  进阶:
  如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

// 动态规划
var maxSubArray = function(nums) {
  let res = 0;
  let sum = 0;
  for(let i=0; i<nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    res = sum > res ? sum : res;
  }
  return res;
};


// 暴力破解
var maxSubArray = function(nums) {
  let res = nums[0];
  for(let i=0, len=nums.length; i<len; i++) {
    let sum = 0;
    for(let j=i; j<len; j++) {
      sum += nums[j];
      res = sum > res ? sum : res;
    }
  }
  return res;
}