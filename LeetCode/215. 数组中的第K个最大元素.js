/* 
  在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

  示例 1:
  输入: [3,2,1,5,6,4] 和 k = 2
  输出: 5

  示例 2:
  输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
  输出: 4

  说明:
  你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 使用快排对数组进行划分
var findKthLargest = function(nums, k) {
  function rec(arr, left, right) {
    if(left > right)  return;
    // 降序排列
    let index = partition(arr, left, right);
    if(k === index + 1) {
      return arr[index];
    }
    // 目标元素比arr[index]小
    else if(k > index + 1) {
      return rec(arr, index + 1, right);
    }
    // 目标元素比arr[index]大
    else if(k < index + 1) {
      return rec(arr, left, index - 1);
    }
  }
  function partition(arr, left, right) {
    let temp = arr[left];
    while(left < right) {
      while(left < right && arr[right] <= temp) right--;
      arr[left] = arr[right];
      while(left < right && arr[left] > temp) left++;
      arr[right] = arr[left];
    }
    arr[left] = temp;
    return left;
  }
  return rec(nums, 0, nums.length-1);
};