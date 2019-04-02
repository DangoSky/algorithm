/* 
  给定平面上 n 对不同的点，“回旋镖” 是由点表示的元组 (i, j, k) ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。
  找到所有回旋镖的数量。你可以假设 n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。

  示例:
  输入:
  [[0,0],[1,0],[2,0]]
  输出:
  2
  解释:
  两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
*/


// 三层for循环暴力破解跑了八千多ms，有时候能ac，有时候就re
var numberOfBoomerangs = function(points) {
  function computed(x1, y1, x2, y2) {
    let dx = x1 - x2;
    let dy = y1 - y2; 
    return Math.sqrt(dx * dx + dy * dy);
  }
  let len = points.length;
  let sum = 0;
  for(let i=0; i<len; i++) {
    for(let j=0; j<len; j++) {
      for(let t=0; t<len; t++) {
        if(i === j || i === t || j === t) continue;
        let dis1 = computed(points[i][0], points[i][1], points[j][0], points[j][1]);
        let dis2 = computed(points[i][0], points[i][1], points[t][0], points[t][1]);
        if(dis1 === dis2) {
          sum++;
        }
      }
    }
  }
  return sum;
};

// 两层for循环，跑了1000多ms
var numberOfBoomerangs = function(points) {
  // 因为部分求出来的距离开根号后变成了小数，所以直接用其平方作为距离了
  function computed(x1, y1, x2, y2) {
    let dx = x1 - x2;
    let dy = y1 - y2; 
    return dx * dx + dy * dy;
  }
  let len = points.length;
  let sum = 0;
  for(let i=0; i<len; i++) {
    let arr = [];
    // 计算每一个结点与i结点的距离，并以该距离值为键，距离相同的结点的个数为值存入数组中
    for(let j=0; j<len; j++) {
      if(i === j) continue;
      let dis = computed(points[i][0], points[i][1], points[j][0], points[j][1]);
        arr[dis] = arr[dis] ? arr[dis] + 1 : 1;
    }
    // 把和i结点距离相同的结点进行组合，求出以i结点为首的回旋镖数量
    for(let index in arr) {
      if(arr[index] >= 2) {
        let tem = Number(arr[index]);
        sum += tem * (tem - 1);
      }
    }
  }
  return sum;
};
console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]));     // 2
console.log(numberOfBoomerangs([[0,0],[1,0],[-1,0],[0,1],[0,-1]]));  // 20





