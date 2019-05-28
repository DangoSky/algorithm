/* 
  给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
  说明：解集不能包含重复的子集。

  示例:
  输入: [1,2,2]
  输出:
  [
    [2],
    [1],
    [1,2,2],
    [2,2],
    [1,2],
    []
  ]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 思路同第78题，只是需要去重
// 得到重复子集的原因在于，有两个相同的数都添加进了前面的序列中，比如[1,2,2]，第一个2已经生成了[1,2]，第二个又生成了一次[1,2]
// 所以可以先对nums排序，遇到相同的数则只在上一次得到的新子集上添加，否则向所有的res元素里添加。
// 所以这里只需要标记出上一次得到的新子集的起始就可以了，终点自然是res.length，而起点可以由当前的res长度减去上次增加子集前的res长度之差得到
var subsetsWithDup = function(nums) {
  let res = [];
  res.push([]);
  nums.sort((a, b) => a - b);
  // 表示上一次的res长度
  let lastLen = 0;
  // 表示上一次得到的新子集的起始位置
  let left = 0, right = 0;
  for(let i=0, len=nums.length; i<len; i++) {
    // 不和前面的元素重复
    if(nums[i] !== nums[i-1] || i === 0) {
      left = 0;
    }
    // 和前面的元素重复，只往上一次得到的新子集里添加当前元素
    else {
      left = res.length - lastLen;
    }
    right = res.length;
    lastLen = right - left;
    for(let j=left; j<right; j++) {
      let temp = res[j].slice(0);
      temp.push(nums[i]);
      res.push(temp);
    }
  }
  return res;  
};