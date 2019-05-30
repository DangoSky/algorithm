/* 
  给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
  注意：答案中不可以包含重复的三元组。

  例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
  满足要求的三元组集合为：
  [
    [-1, 0, 1],
    [-1, -1, 2]
  ]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 将数组排序后遍历数组，将问题转化成在当前元素之后的数组中寻找两个数使得nums[l] + nums[r] = -nums[i]。
// 也就是三数之和转换为两数之和
// 问题的另一个关键在于需要去掉重复的数字，比如 [-2,0,0,2,2]
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for(let i=0, len=nums.length; i<len-2; i++) {
    // 跳过重复的数字
    if(i !== 0 && nums[i] === nums[i-1])  continue;
    let l = i + 1;
    let r = len - 1;
    while(l < r) {
      if(nums[l] + nums[r] > -nums[i]) {
        // 去重
        while(nums[r] === nums[r-1] && l < r) r--;
        r--;
      }
      else if(nums[l] + nums[r] < -nums[i]) {
        // 去重
        while(nums[l] === nums[l+1] && l < r) l++;
        l++;
      }
      else {
        res.push([nums[i], nums[l], nums[r]]);
          // 去重
          while(nums[r] === nums[r-1] && l < r) r--;
          while(nums[l] === nums[l+1] && l < r) l++;
          l++;
          r--;
      }
    }
  }
  return res;
}