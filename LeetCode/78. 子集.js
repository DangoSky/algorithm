/* 
  给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
  说明：解集不能包含重复的子集。

  示例:
  输入: nums = [1,2,3]
  输出:
  [
    [3],
    [1],
    [2],
    [1,2,3],
    [1,3],
    [2,3],
    [1,2],
    []
  ]
*/

// 遍历时遇到一个数就把所有子集加上该数组成新的子集，遍历完毕即是所有子集
var subsets = function(nums) {
  let res = [];
  res.push([]);
  for(let i=0, len=nums.length; i<len; i++) {
    let temLen = res.length;
    for(let j=0; j<temLen; j++) {
      let arr = res[j].slice();
      arr.push(nums[i]);
      res.push(arr);
    }
  }  
  return res;
};