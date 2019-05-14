/* 
  给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

  说明:
  初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
  你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

  示例:
  输入:
  nums1 = [1,2,3,0,0,0], m = 3
  nums2 = [2,5,6],       n = 3
  输出: [1,2,2,3,5,6]
*/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 将nums1后面的0替换成nums2
var merge = function(nums1, m, nums2, n) {
  for(let i=m, j=0; j<n; j++) {
    nums1[i++] = nums2[j];
  }
  return nums1.sort((a, b) => a - b);
};

// 从后往前比较
var merge = function(nums1, m, nums2, n) {
  while(n > 0) {
    if(m === 0 || nums1[m-1] <= nums2[n-1]) {
      nums1[n+m-1] = nums2[n-1];
      n--;
    }
    else if(nums1[m-1] > nums2[n-1]) {
      nums1[n+m-1] = nums1[m-1];
      m--;
    }
  }
  return nums1;
};