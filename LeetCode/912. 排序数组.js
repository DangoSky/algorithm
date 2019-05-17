/* 
  给定一个整数数组 nums，将该数组升序排列。
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// sort
var sortArray = function(nums) {
  return nums.sort((a, b) => a - b);  
};

// 冒泡排序，从后向前遍历。
var sortArray = function(nums) {
  for(let i=nums.length-1; i>0; i--) {
    // 如果一轮比较中没有需要交换的数据，则说明数组已经有序
    let mark = true;
    for(let j=0; j<i; j++) {
      if(nums[j] > nums[j+1]) {
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
        mark = false;
      }
    }
    if(mark)  return nums;
  }
  return nums;
}

// 冒泡排序，从前向后遍历。
var sortArray = function(nums) {
  for(let i=0, len=nums.length; i<len-1; i++) {
    // 如果一轮比较中没有需要交换的数据，则说明数组已经有序
    let mark = true;
    for(let j=0; j<len-i-1; j++) {
      if(nums[j] > nums[j+1]) {
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
        mark = false;
      }
    }
    if(mark)  return nums;
  }
  return nums;
}

// 选择排序
var sortArray = function(nums) {
  for(let i=0, len=nums.length; i<len; i++) {
    for(let j=i+1; j<len; j++) {
      if(nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
}

// 快速排序，填坑法
var sortArray = function(nums) {
  function quickSort(arr, left, right) {
    if(left >= right)  return arr;
    // 确定基数的位置
    let index = partition(arr, left, right);
    quickSort(arr, left, index - 1);
    quickSort(arr, index + 1, right);
    return arr;
  }
  function partition(arr, left, right) {
    // 取第一个数为基数
    let temp = arr[left];
    while(left < right) {
      while(left < right && arr[right] >= temp)  right--;
      arr[left] = arr[right];
      while(left < right && arr[left] < temp)  left++;
      arr[right] = arr[left];
    }
    arr[left] = temp;
    return left;
  }
  return quickSort(nums, 0, nums.length-1);
};

// 快速排序，交换两节点
var sortArray = function(nums) {
  function partition(arr, left, right) {
    let temp = arr[left];
    let p = left + 1;
    let q = right;
    while(p <= q) {
      while(p <= q && arr[p] < temp)  p++;
      while(p <= q && arr[q] > temp)  q--;
      if(p <= q) {
        [arr[p], arr[q]] = [arr[q], arr[p]];
        p++;
        q--;
      }
    }
    [arr[left], arr[q]] = [arr[q], arr[left]];
    return q;
  }
  function quickSort(arr, left, right) {
    if(left >= right)  return arr;
    let index = partition(arr, left, right);
    quickSort(arr, left, index - 1);
    quickSort(arr, index + 1, right);
    return arr;
  }
  return quickSort(nums, 0, nums.length-1);
};