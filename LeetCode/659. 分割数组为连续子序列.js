/* 
输入一个按升序排序的整数数组（可能包含重复数字），你需要将它们分割成几个子序列，其中每个子序列至少包含三个连续整数。返回你是否能做出这样的分割？

示例 1：
输入: [1,2,3,3,4,5]
输出: True
解释:
你可以分割出这样两个连续子序列 : 
1, 2, 3
3, 4, 5

示例 2：
输入: [1,2,3,3,4,4,5,5]
输出: True
解释:
你可以分割出这样两个连续子序列 : 
1, 2, 3, 4, 5
3, 4, 5
 
示例 3：
输入: [1,2,3,4,4,5]
输出: False
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 分别记录数组中每个元素出现的次数和以当前元素作为结尾的序列有多少个（可能有多个，比如数组为 [1,1,2,2,3,3]，这样以 3 为结尾的序列就有 2 个）
// 遍历数组，当前数组元素值为 val。如果存在以 val-1 结尾的序列，则将 val 增加到该序列中，并对两个记录数组做相应调整。
// 不存在的话则判断是否存在 val+1 和 val+2，存在的话则可以另起一个新的序列，否则的话则表示 val 无法和其他数组元素连续起来，可以直接返回 false 了。
var isPossible = function(nums) {
  const hash = {};  // 记录每个数组元素出现的次数，这里使用 {} 而不是 [] 可以避免稀疏数组的问题，减少内存消耗
  const tail = {};  // tail[val] 表示以 val 结尾的序列个数
  nums.forEach(val => {
    hash[val] = hash[val] + 1 || 1;
    tail[val] = 0;
  })
  for(let i=0; i<nums.length; i++) {
    const val = nums[i];
    // val 可能已经被前面的数组元素拿去另起一个序列了，所以 hash[val] 可能为 0
    if(hash[val] === 0) {
      continue;
    } else if (tail[val-1] > 0) {
      hash[val]--;
      tail[val-1]--;
      tail[val]++;
    } else if (hash[val+1] > 0 && hash[val+2] > 0) {
      hash[val]--;
      hash[val+1]--;
      hash[val+2]--;
      tail[val+2]++;
    } else {
      return false;
    }
  }
  return true;
};
