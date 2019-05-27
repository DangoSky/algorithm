/* 
  给定一个没有重复数字的序列，返回其所有可能的全排列。

  示例:
  输入: [1,2,3]
  输出:
  [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
  ]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 递归，不断将这个序列切分为第一个数字和后续的数字，将第一个数字分别和后续的数字都进行一次交换，并以此递归操作后续的的数字即可。
var permute = function(nums) {
  let len = nums.length;
  let res = [];
  function fn(arr, start) {
    if(start > len-1) {
      // 需要浅拷贝一次，否则后续的交换操作会影响到res中已排列的序列
       res.push(arr.slice(0));
      return;
    }
    for(let i=start; i<len; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      fn(arr, start + 1);
      // 后面要把两个数交换回来，才能不影响另一个排列
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }
  fn(nums, 0);
  return res;
};