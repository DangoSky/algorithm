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
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2,2,1,1,1,2,2]));