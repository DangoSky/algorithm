/* 
给定两个数组，编写一个函数来计算它们的交集。

示例 1:
输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2,2]

示例 2:
输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [4,9]

说明：
输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
我们可以不考虑输出结果的顺序。

进阶:
如果给定的数组已经排好序呢？你将如何优化你的算法？
如果 nums1 的大小比 nums2 小很多，哪种方法更优？
如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
*/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 时间复杂度 O(n + m)，空间复杂度 O(min(n, m))
var intersect = function(nums1, nums2) {
  // 如果 nums1 的长度比 nums2 大的话，则先交换两者的顺序，可以减小空间复杂度，避免 nums1 长度比 nums2 大很多的情况
  if (nums1.length > nums2.length) {
    return intersect(nums2, nums1);
  }
  let mark = {};
  for(let i=0, len=nums1.length; i<len; i++)   {
    mark[nums1[i]] = mark[nums1[i]] + 1 || 1;
  }
  let res = [];
  for(let i=0, len=nums2.length; i<len; i++) {
    if(mark[nums2[i]] > 0) {
      res.push(nums2[i]);
      mark[nums2[i]]--;
    }
  }
  return res;
};

// 时间复杂度 O(nlogn + mlogm)，空间复杂度 O(1)
// 先给两个数组排序，后循环一个数组，判断当前两个数组的元素的大小关系，一路推进（双指针法）
var intersect = function(nums1, nums2) {
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
