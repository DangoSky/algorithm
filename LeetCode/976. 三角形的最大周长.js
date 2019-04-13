/* 
  给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。
  如果不能形成任何面积不为零的三角形，返回 0。
*/

var largestPerimeter = function(A) {
  A.sort((a, b) => {
    return b - a;
  })
  for(let i=2; i<A.length; i++) {
    if(A[i] + A[i-1] > A[i-2]) {
      return A[i] + A[i-1] + A[i-2];
    }
  }
  return 0;
};
console.log(largestPerimeter([2, 1, 2]));
console.log(largestPerimeter([3, 2, 3, 4]));
console.log(largestPerimeter([1, 2, 1]));
