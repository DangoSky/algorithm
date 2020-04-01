/* 
给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
说明：你不能倾斜容器，且 n 的值至少为 2。
图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

示例：
输入：[1,8,6,2,5,4,8,3,7]
输出：49
*/

/**
 * @param {number[]} height
 * @return {number}
 */

// 暴力破解，两层 for 算出两两组合的矩形面积
var maxArea = function(height) {
  let res = 0;
  for(let i=0; i<height.length-1; i++) {
    for(let j=i+1; j<height.length; j++) {
      const temp = (j - i) * Math.min(height[i], height[j]);
      if (temp > res) {
        res = temp;
      }
    }
  }
  return res;
};

// 双指针，一个在数组头，一个在数位尾。
// 初始时底长已经是最大了，想要更大的面积，就只能寻找更大的边高。所以比较此时的两条边高，更小的那条舍弃，移动指针寻找下一条边看看能不能得到更大的面积
var maxArea = function(height) {
  let res = 0;
  let l = 0, r = height.length - 1;
  while (l < r) {
    res = Math.max(res, (r - l) * Math.min(height[l], height[r]));
    if (height[l] > height[r]) {
      r--;
    } else {
      l++;
    }
  }
  return res;
}