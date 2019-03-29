/* 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

示例 1:
给定数组 nums = [1,1,2], 
函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 
你不需要考虑数组中超出新长度后面的元素。 */



// 方法一：使用一个变量标记
var removeDuplicates = function(nums) {
  let len = nums.length;
  let tem = 0;
  for(let i=1; i<len; i++) {
    if(nums[i] !== nums[tem]) {
      tem++;
      nums[tem] = nums[i];
    }  
  }
    return tem + 1;
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([1, 1, 2]));


// 方法二：splice
var removeDuplicates = function(nums) {
  for(let i=0; i<nums.length-1; i++) {
    if(nums[i] === nums[i+1]) {
      nums.splice(i, 1);
      i--;
    }  
  }
  return nums.length;
};