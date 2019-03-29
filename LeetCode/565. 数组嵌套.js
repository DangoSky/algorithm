/* 索引从0开始长度为N的数组A，包含0到N - 1的所有整数。找到并返回最大的集合S，S[i] = {A[i], A[A[i]], A[A[A[i]]], ... }且遵守以下的规则。
假设选择索引为i的元素A[i]为S的第一个元素，S的下一个元素应该是A[A[i]]，之后是A[A[A[i]]]... 以此类推，不断添加直到S出现重复的元素。

示例 1:
输入: A = [5,4,0,3,1,6,2]
输出: 4

解释: 
A[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.
其中一种最长的 S[K]:
S[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}

注意:
N是[1, 20,000]之间的整数。
A中不含有重复的元素。
A中的元素大小在[0, N-1]之间。 */




// 我原先是直接一层for+一层while，但超时了。看了评论区发现存在一个优化。若当前的元素在之前的S集合出现过，那以该元素开头的集合长度一定不会最大，想了一下发现确实是这样。所以只需要去维护一个已经出现过的元素的数组再在每一层for循环开头判断该元素是否存在若存在就直接continue。
// 需要特别注意的是题目给的消息：数组A中不含有重复的元素！否则这个优化是不成立的，while的判断条件也是根据这个前提，若数组A中有重复的元素，则第一次出现的重复元素不一定会是A[i]。
var arrayNesting = function(nums) {
  let max = 0;
  let mark = [];
  for(let i=0; i<nums.length; i++) {
    if(mark.includes(nums[i])) {
      continue;
    }
    let tem = nums[i];
    let count = 1;
    while(nums[i] !== nums[tem]) {
      tem = nums[tem];
      count++;
      mark.push(tem);
    }
    max = max > count ? max : count;
  }
  return max;
};

console.log(arrayNesting([5,4,0,3,1,6,2]));