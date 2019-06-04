/* 
  给定一个大小为 n 的数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
  说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1)。

  示例 1:
  输入: [3,2,3]
  输出: [3]

  示例 2:
  输入: [1,1,1,3,3,2,2,2]
  输出: [1,2]
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 同 169 题
// 最多只有两个数
var majorityElement = function(nums) {
  let n = 0, m = 0;
  let cn = 0, cm = 0;
  for(let i=0, len=nums.length; i<len; i++) {
    if(nums[i] === n) cn++;
    else if(nums[i] === m) cm++;
    else if(cn <= 0) {
      n = nums[i];
      cn = 1;
    }
    else if(cm <= 0) {
      m = nums[i];
      cm = 1;
    }
    else {
      cn--;
      cm--;
    }
  }
  // 判断获取到的两个众数是否正确
  cm = 0, cn = 0;
  for(let i=0, len=nums.length; i<len; i++) {
    if(nums[i] === m)  cm++;
    else if(nums[i] === n)  cn++;
  }
  let res = [];
  let temp = parseInt(nums.length / 3);
  if(cm > temp)  res.push(m);
  if(cn > temp)  res.push(n);
  return res;
};