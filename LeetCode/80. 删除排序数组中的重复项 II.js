/* 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

示例 1:
给定 nums = [1,1,1,2,2,3],
函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。
你不需要考虑数组中超出新长度后面的元素。  */ 
  

// 同第26题
var removeDuplicates = function(nums) {
  let len = nums.length;
  let tem = 0;
  for(let i=1; i<len; i++) {
    if(nums[i+1] !== nums[tem]) {
      tem++;
      nums[tem] = nums[i];
    }  
  }
  return tem + 1;
};

console.log(removeDuplicates([1,1,1,2,2,3]));
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));

// 同第26题
var removeDuplicates = function(nums) {
  for(let i=0; i<nums.length-2; i++) {
    if(nums[i] === nums[i+2]) {
      nums.splice(i, 1);
      i--;
    }  
  }
  return nums.length;
};