/* 
  给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
  你可以假设数组是非空的，并且给定的数组总是存在众数。

  示例 1:
  输入: [3,2,3]
  输出: 3
*/

// 哈希
var majorityElement = function(nums) {
  let arr = [];
  let mark = Math.floor(nums.length / 2);
  for(let i=0, len=nums.length; i<len; i++) {
    arr[nums[i]] = arr[nums[i]] + 1 || 1;
    if(arr[nums[i]] > mark) {
      return nums[i];
    }
  }
};

// 摩尔投票算法
// 出现次数大于 ⌊ n/2 ⌋ 的元素，最多只有一个
var majorityElement = function(nums) {
  let res = nums[0];
  let count = 1;
  for(let i=1, len=nums.length; i<len; i++) {
    if(res === nums[i]) {
      count++;
    }
    else {
      count--;
    }
    if(count === 0) {
      res = nums[i];
      count = 1;
    }
  }
  return res;
};