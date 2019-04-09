/* 
  给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
  找到所有在 [1, n] 范围之间没有出现在数组中的数字。
  您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

  示例:
  输入:
  [4,3,2,7,8,2,3,1]
  输出:
  [5,6]
*/

// 另起一个数组通过下标标记是否出现过
var findDisappearedNumbers = function(nums) {
  let len = nums.length;
  let arr = [];
  let res = [];
  for(let i=0; i<len; i++) {
    arr[nums[i]] = 1;
  }
  for(let i=1; i<=len; i++) {
    if(arr[i] !== 1) {
      res.push(i);
    }
  }
  return res;
};


// 将所有正数作为数组下标，置对应数组值为负值。则仍为正数的位置即为（未出现过）消失的数字。
var findDisappearedNumbers = function(nums) {
  let len = nums.length;
  for(let i=0; i<len; i++) {
    let tem = Math.abs(nums[i]) - 1;
    nums[tem] = -Math.abs(nums[tem]);
  }
  let res = [];
  for(let i=0; i<len; i++) {
    if(nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
console.log(findDisappearedNumbers([1, 1]));
console.log(findDisappearedNumbers([2, 2]));