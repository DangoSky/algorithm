/* 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
Do not return anything, modify nums in-place instead.

示例 1:
输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4] */


// 方法一: 创建一个新数组，一个用于修改，一个用于查询原先的值
var rotate = function(nums, k) {
  let len = nums.length;
  let arr = nums.slice();
  for(let i=0; i<len; i++) {
    let tem = i+k >= len ? (i+k-len)%len : i+k;
    nums[tem] = arr[i];
  }
};
rotate([1,2,3,4,5,6,7], 3);


// 方法二: 使用map循环，根据结果数组的每一位反推到原始数组对应的那一位
var rotate = function(nums, k) {
  let len = nums.length;
  nums = nums.map((val, index) => {
    let tem = index-k < 0 ? (len+index-k)%len : index-k;
    return nums[tem];
  })
};
rotate([1, 2], 2);


// 方法二: 最简单的办法
var rotate = function(nums, k) {
  while(k--) {
    nums.unshift(nums.pop());
  }
}