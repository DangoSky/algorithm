/* 
  给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
  你的算法时间复杂度必须是 O(log n) 级别。
  如果数组中不存在目标值，返回 [-1, -1]。

  示例 1:
  输入: nums = [5,7,7,8,8,10], target = 8
  输出: [3,4]

  示例 2:
  输入: nums = [5,7,7,8,8,10], target = 6
  输出: [-1,-1]
*/

var searchRange = function(nums, target) {
  // 当turnLeft是true时表示找左边界，为false时表示找右边界
  function binarySearch(arr, target, turnLeft) {
    let left = 0, right = arr.length - 1;
    while(left <= right) {
      let mid = parseInt((right - left) / 2) + left;
      // 如果当前的数组元素是target并且是要找左边界，则将右边界置为mid-1，并向左边迭代。
      // 如果此时arr[mid]就是左数第一个target了，那么循环结束后找不到target，left也会加1回到此时的mid
      if (arr[mid] > target || (turnLeft && arr[mid] === target)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
  function judge(index) {
    return nums[index] === target ? index : -1;
  }

  let indexLeft = judge(binarySearch(nums, target, true));
  // 找右边界时，当退出循环的时候，左边的部分都大于或等于target，所以需要将下标-1
  let indexRight = judge(binarySearch(nums, target, false) - 1);
  return [indexLeft, indexRight];
};
