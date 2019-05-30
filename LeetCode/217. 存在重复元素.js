/* 
  给定一个整数数组，判断是否存在重复元素。
  如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

  示例 1:
  输入: [1,2,3,1]
  输出: true

  示例 2:
  输入: [1,2,3,4]
  输出: false
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  for(let i=0, len=nums.length; i<len; i++) {
    if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i]))  {
      return true;
    }
  }
  return false;
};

var containsDuplicate = function(nums) {
  let mark = [];
  for(let i=0, len=nums.length; i<len; i++) {
    if(!mark[nums[i]])  {
      mark[nums[i]] = 1;
    }
    else {
      return true;
    }
  }
  return false;
}

var containsDuplicate = function(nums) {
  let arr = [...new Set(nums)];
  return arr.length !== nums.length;
}