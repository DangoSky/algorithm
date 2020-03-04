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

//  时间复杂度 O(n + m)，空间复杂度 O(n)
var intersection = function(nums1, nums2) {
  let mark = [];
  // 需要先去重，不然得到的结果数组中可能会有重复
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

// 时间复杂度 O(nlogn + mlogm)，空间复杂度 O(1)
// 先给两个数组排序，后循环一个数组，判断当前两个数组的元素的大小关系，一路推进（双指针法）
var intersection = function(nums1, nums2) {
  nums1 = [...new Set(nums1)];
  nums2 = [...new Set(nums2)];
  nums1.sort((a, b) => { return a - b; })
  nums2.sort((a, b) => { return a - b; })
  const res = [];
  let i = 0, j = 0;
  while(i < nums1.length && j< nums2.length) {
    if (nums1[i] === nums2[j]) {
      res.push(nums1[i])
      i++;
      j++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      i++;
    }
  }
  return res;
};
