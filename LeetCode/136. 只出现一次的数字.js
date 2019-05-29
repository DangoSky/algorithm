/* 
  给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
  说明：
  你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

  示例 1:
  输入: [2,2,1]
  输出: 1

  示例 2:
  输入: [4,1,2,1,2]
  输出: 4
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  for(let i=0, len=nums.length; i<len; i++) {
    if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      return nums[i];
    }
  }
};


var singleNumber = function(nums) {
  nums.sort((a, b) => a - b);
  let len = nums.length;
  if(nums[0] !== nums[1])  return nums[0];
  if(nums[len-1] !== nums[len-2])  return nums[len-1];
  for(let i=1; i<len-1; i++) {
    if(nums[i] !== nums[i-1] && nums[i] !== nums[i+1])  {
      return nums[i];
    }
  }
}


// 使用异或
// 异或运算规律：
// 1. a ^ b ^ c <=> a ^ c ^ b
// 2. 任何数和0异或结果为任何数: 0 ^ n => n
// 3. 相同的数异或为0: n ^ n => 0
var singleNumber = function(nums) {
  let res = 0;
  nums.forEach(val => {
    res ^= val;
  })
  return res;
}