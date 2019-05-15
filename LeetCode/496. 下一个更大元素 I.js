/* 
  给定两个没有重复元素的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出-1。

  示例 1:
  输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
  输出: [-1,3,-1]
  解释:
      对于num1中的数字4，你无法在第二个数组中找到下一个更大的数字，因此输出 -1。
      对于num1中的数字1，第二个数组中数字1右边的下一个较大数字是 3。
      对于num1中的数字2，第二个数组中没有下一个更大的数字，因此输出 -1。
  示例 2:
  输入: nums1 = [2,4], nums2 = [1,2,3,4].
  输出: [3,-1]
  解释:
      对于num1中的数字2，第二个数组中的下一个较大数字是3。
      对于num1中的数字4，第二个数组中没有下一个更大的数字，因此输出 -1。
  注意:
  nums1和nums2中所有元素是唯一的。
  nums1和nums2 的数组大小都不超过1000。
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let res = [];
  for(let i=0, len=nums1.length; i<len; i++) {
    // 或者标记一个变量判断nums2是否已经达到nums1[i]的位置
    let index = nums2.indexOf(nums1[i]);
    let ans = -1;
    for(let j=index+1, len1=nums2.length; j<len1; j++) {
      if(nums2[j] > nums1[i]) {
        ans = nums2[j];
        break;
      }
    }
    res.push(ans);
  }
  return res;
};

var nextGreaterElement = function(nums1, nums2) {
  let res = {};
  // 遍历nums2，如果栈不为空且当前数组元素大于栈顶元素，则将栈顶元素出栈，并将其和当前数组元素形成键值对存储起来，代表当前元素是栈顶元素右边第一个大于它的数
  // 之后再将当前数组元素入栈
  let stack = [];
  for(let i=0, len=nums2.length; i<len; i++) {
    while(stack.length !== 0 && nums2[i] > stack[0]) {
      res[stack.shift()] = nums2[i];
    }
    stack.unshift(nums2[i]);
  }
  return nums1.map((val) => {
    return res[val] || -1;
  })
}