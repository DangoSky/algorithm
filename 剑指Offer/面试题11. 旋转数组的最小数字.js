/* 
  把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

  示例 1：
  输入：[3,4,5,1,2]
  输出：1

  示例 2：
  输入：[2,2,2,0,1]
  输出：0
*/
/**
 * @param {number[]} numbers
 * @return {number}
 */

// 直接循环判断 numbers[i] 是否会小于 numbers[i-1]，是的话就是旋转点。时间复杂度为 O(n)
var minArray = function(numbers) {
  for(let i=1; i<numbers.length; i++) {
    if (numbers[i] < numbers[i-1]) {
      return numbers[i];
    }
  }
  // 如果上面的 for 循环没有找到，说明数组没有旋转。由于数组按照升序排列，所以直接返回 numbers[0]
  return numbers[0];
}

// 二分，时间复杂度为 O(logN)
// 通过数组旋转，可以将原数组切分为两个升序排序的子数组，左子数组较大，右子数组较小，如 [3,4,5,1,2]。
// 通过二分取中间的数组元素 numbers[mid]，将其和数组右边界元素 numbers[r] 比较。
// 大于的话说明 numbers[mid] 在右子数组中，那么旋转点在 numbers[mid] 右边，所以将寻找范围缩小到 [mid+1, r]。
// 小于的话说明 numbers[mid] 在左子数组中，那么旋转点可能是 numbers[mid] 或者在其左边，所以将寻找范围缩小到 [l, mid]。
// 等于的话只需 r-- 舍弃掉 numbers[r]，因为 r-- 后旋转点还是在 [l, r] 上。
// 需要注意的是（采坑了 Orz）
// 不能将 numbers[mid] 和 numbers[l] 比较，因为两者比较无法得出 numbers[mid] 是在左子数组还是在右子数组。
// 例如 [3, 4, 5, 1, 2] 与 [1, 2, 3, 4, 5]，numbers[mid] 都大于 numbers[l]，但最小值一个在后面，一个在前面。

var minArray = function(numbers) {
  let l = 0, r = numbers.length - 1;
  while(l < r) {
    const mid = Math.floor((r - l) / 2) + l;
    if (numbers[mid] > numbers[r]) {
      l = mid + 1;
    } else if (numbers[mid] < numbers[r]) {
      r = mid;
    } else {
      r--;
    }
  }
  return numbers[l];
};
