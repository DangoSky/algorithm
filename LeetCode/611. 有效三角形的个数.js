/* 
给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。

示例 1:
输入: [2,2,3,4]
输出: 3

解释:
有效的组合是: 
2,3,4 (使用第一个 2)
2,3,4 (使用第二个 2)
2,2,3

注意:
数组长度不超过1000。
数组里整数的范围为 [0, 1000]。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// 暴力破解，三层 for 循环。如果没有事先排序的话则需要两两一组和另一个值比较大小
// 时间复杂度：O(N^3)
var triangleNumber = function(nums) {
  const len = nums.length;
  let res = 0;
  for(let i=0; i<len-2; i++) {
    for(let j=i+1; j<len-1; j++) {
      for(let t=j+1; j<len; t++) {
        if (
          nums[i] + nums[j] > nums[t] &&
          nums[i] + nums[t] > nums[j] &&
          nums[j] + nums[t] > nums[i]
        ) {
          res++;
        } else {
          break;
        }
      }
    }
  }
  return res;
};

// 二分查找。先排序后两层 for 循环，通过二分查找找出数组中等于前两数之和的值的数组下标，它和第二个数之间的数组元素便满足两数之和大于第三个数
// 需要注意的是，这里二分查找要找的是数组中元素第一次出现的位置，因为元素可能重复出现
// 时间复杂度：O(N^2 * logN)
var triangleNumber = function(nums) {
  function binarySearch(arr, l, r, target) {
    while (l <= r && r < nums.length) {
      const mid = parseInt((l + r) / 2);
      if (arr[mid] >= target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return l;
  }

  nums.sort((a, b) => {
    return a - b;
  })
  const len = nums.length;
  let res = 0;
  for(let i=0; i<len-2; i++) {
    for(let j=i+1; j<len-1 && nums[i] !== 0; j++) {
      const index = binarySearch(nums, j + 1, len - 1, nums[i] + nums[j]);
      res += (index - j - 1);
    }
  }
  return res;
};


// 双指针。两层 for 循环后使用 while 推进判断 nums[i]+nums[j]>nums[t]，每次 j+1 后 t 不用从 j+1 开始算起，因为前面已经满足 nums[i]+nums[j]>nums[t]，那么现在 nums[i]+nums[j+1]>nums[t] 也会成立。
// 时间复杂度：O(N^2)
var triangleNumber = function(nums) {
  const len = nums.length;
  let res = 0;
  nums.sort((a, b) => {
    return a - b;
  })
  for(let i=0; i<len-2; i++) {
    let t = i + 2;
    for(let j=i+1; j<len-1 && nums[i] !== 0; j++) {
      while(t < len && nums[i] + nums[j] > nums[t]) {
        t++;
      }
      res += (t - j - 1);
    }
  }
  return res;
};
