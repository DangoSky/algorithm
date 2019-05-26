/* 
  给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
  此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

  注意:
  不能使用代码库中的排序函数来解决这道题。

  示例:
  输入: [2,0,2,1,1,0]
  输出: [0,0,1,1,2,2]

  进阶：
  一个直观的解决方案是使用计数排序的两趟扫描算法。
  首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
  你能想出一个仅使用常数空间的一趟扫描算法吗？
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 哈希表，相当于计数排序
var sortColors = function(nums) {
  let arr = [];
  for(let i=0; i<nums.length; i++) {
    arr[nums[i]] = arr[nums[i]] + 1 || 1; 
  }
  let index = 0;
  for(let i=0; i<=2; i++) {
    while(arr[i]--) {
      nums[index++] = i;
    }
  }
  return nums;
};

// 三路排序
// 如果是0，则移动到表头，如果是2，则移动到表尾
var sortColors = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  for(let i=0; i<=r;) {
    if(nums[i] === 0)  {
      [nums[i], nums[l]] = [nums[l], nums[i]];      
      l++;
      i++;
    }
    else if(nums[i] === 2) {
      [nums[i], nums[r]] = [nums[r], nums[i]];      
      r--;
    }
    else if(nums[i] === 1) {
      i++;
    }
  }
  return nums;
};