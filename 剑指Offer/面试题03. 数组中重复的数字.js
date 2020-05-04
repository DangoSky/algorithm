/* 
  找出数组中重复的数字。
  在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

  示例 1：
  输入：
  [2, 3, 1, 0, 2, 5, 3]
  输出：2 或 3 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// indexOf 和 lastIndexOf
// 时间复杂度应该是 O(n^2)
var findRepeatNumber = function(nums) {
  for(let i=0; i<nums.length; i++) {
    if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
      return nums[i];
    }
  }
};

// 先排序再遍历
// 时间复杂度是 O(n * logN)
var findRepeatNumber = function(nums) {
  nums.sort((a, b) => {
    return a - b;
  })
  for(let i=0; i<nums.length-1; i++) {
    if (nums[i] === nums[i+1]) {
      return nums[i];
    }
  }
};

// 哈希
// 时间复杂度和空间复杂度都是 O(n)
var findRepeatNumber = function(nums) {
  const obj = {};
  for(let i=0; i<nums.length; i++) {
    const item = nums[i];
    if (obj[item]) {
      return item;
    }
    obj[item] = 1;
  }
};

var findRepeatNumber = function(nums) {
  for(let i=0; i<nums.length; i++) {
    const val = nums[i];
    // 当前数组元素值不等于它的下标
    if (i !== val) {
      // val 已经存在过了
      if (nums[val] === val) {
        return val;
      } else {
        [nums[i], nums[val]] = [nums[val], nums[i]];
      }
    }
  }
}
