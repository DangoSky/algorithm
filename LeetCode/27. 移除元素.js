/* 
  给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
  不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
  元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
*/



var removeElement = function(nums, val) {
  for(let i=0; i<nums.length; i++) {
    if(nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  console.log(nums);
  return nums.length;
};

var removeElement = function(nums, val) {
  let index = nums.indexOf(val) + 1;   // +1 是为了防止index等于0时直接不进入while循环
  while(index) {
    nums.splice(index - 1, 1);
    index = nums.indexOf(val) + 1;
  }
  return nums.length;
};
console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));