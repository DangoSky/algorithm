/* 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

说明:
返回的下标值（index1 和 index2）不是从零开始的。
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
示例:

输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。 */



// 方法一：暴力循环
var twoSum = function(numbers, target) {
  let len = numbers.length;
  for(let i=0; i<len; i++) {
    for(let j=i+1; j<len; j++) {
      if(numbers[i] + numbers[j] === target) {
        return [i+1, j+1];
      }
    }
  }
};

// 方法二：indexOf方法，一层for循环
var twoSum = function(numbers, target) {
  let len = numbers.length;
  for(let i=0; i<len; i++) {
    let index = numbers.indexOf(target - numbers[i], i+1);
    if(index !== -1) {
      return [i+1, index+1];
    }
  }
};

// 方法三：取首尾两数之和和target比较，根据大小关系移动首尾'指针'
var twoSum = function(numbers, target) {
  let i = 0, j = numbers.length -1;
  while(i < j) {
    if(numbers[i] + numbers[j] === target) {
      return [i+1, j+1];
    }
    else if(numbers[i] + numbers[j] < target){
      i++;
    }
    else {
      j--;
    }
  }
};