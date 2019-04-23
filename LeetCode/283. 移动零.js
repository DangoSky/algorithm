/* 
  给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

  示例:
  输入: [0,1,0,3,12]
  输出: [1,3,12,0,0]
*/

// 边删除为0的元素边添加到数组尾
var moveZeroes = function(nums) {
  for(let i=0, len=nums.length; i<len;)  {
    if(nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      // 删除掉为0的元素后要减小数组长度
      len--;
    }
    else {
      i++;
    }
  }
  return nums;
};

// 重新赋值数组，0等到最后再一起添加 
var moveZeroes = function(nums) {
  let j = 0;
  let len = nums.length;
  for(let i=0; i<len; i++)  {
    if(nums[i] !== 0) {
      nums[j++] = nums[i];
    }
  }
  while(j < len) {
    nums[j++] = 0; 
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0,0,1]));

