/* 
  假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。对每个孩子 i ，都有一个胃口值 gi ，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j ，都有一个尺寸 sj 。如果 sj >= gi ，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

  注意：
  你可以假设胃口值为正。
  一个小朋友最多只能拥有一块饼干。

  示例 1:
  输入: [1,2,3], [1,1]
  输出: 1
*/

// 两层循环
var findContentChildren = function(g, s) {
  let arr1 = g.sort((a, b) => {
    return a - b;
  })  
  let arr2 = s.sort((a, b) => {
    return a - b;
  })
  let sum = 0;
  let tem = 0;
  for(let i=0; i<arr1.length; i++) {
    for(let j=tem; j<arr2.length; j++) {
      tem++;
      if(arr1[i] <= arr2[j]) {
        sum++;
        break;
      }
    }
  }
  return sum;
};


// 一层循环
var findContentChildren = function(g, s) {
  let arr1 = g.sort((a, b) => {
    return a - b;
  })  
  let arr2 = s.sort((a, b) => {
    return a - b;
  })
  let len1 = arr1.length;
  let len2 = arr2.length;
  let index1 = 0;
  let index2 = 0;
  let sum = 0;
  while(index1 < len1 && index2 < len2) {
    if(arr1[index1] <= arr2[index2]) {
      sum++;
      index1++;
      index2++;
      continue;
    }
    else {
      index2++;
    }
  }
  return sum;
};
console.log(findContentChildren([1,2,3], [1,1]));
console.log(findContentChildren([1,2], [1,2,3]));