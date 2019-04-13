/* 
  给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。

  示例 1:
  输入: [10,2]
  输出: 210
*/

// 从评论区看到的一个神仙操作
var largestNumber = function(nums) {
  nums.sort((a, b) => {
    let str1 = a.toString();
    let str2 = b.toString();
    return (`${str1}${str2}` > `${str2}${str1}`) ? -1 : 1;
  })
  let ans = nums.join('');
  if(Number(ans) === 0) return '0'; 
  return ans;
}
console.log(largestNumber([128,12]));
console.log(largestNumber([3,30,34,5,9]));
console.log(largestNumber([0, 0]));

