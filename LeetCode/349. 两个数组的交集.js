/* 
  给定两个数组，编写一个函数来计算它们的交集。

  示例 1:
  输入: nums1 = [1,2,2,1], nums2 = [2,2]
  输出: [2]

  示例 2:
  输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  输出: [9,4]
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let mark = [];
  nums1 = [...new Set(nums1)];
  nums2 = [...new Set(nums2)];
  for(let i=0, len=nums1.length; i<len; i++)   {
    mark[nums1[i]] = mark[nums1[i]] + 1 || 1;
  }
  let res = [];
  for(let i=0, len=nums2.length; i<len; i++) {
    if(mark[nums2[i]]) {
      res.push(nums2[i]);
    }
  }
  return res;
};