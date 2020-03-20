/* 
  给出一个区间的集合，请合并所有重叠的区间。

  示例 1:
  输入: [[1,3],[2,6],[8,10],[15,18]]
  输出: [[1,6],[8,10],[15,18]]
  解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

  示例 2:
  输入: [[1,4],[4,5]]
  输出: [[1,5]]
*/


// 每个数组元素为 item，先根据 item[0] 升序排序，循环数组判断 item[1] 和它的下一个数组元素 next[0] 的大小关系
// 大于等于就合并，合并后删除 next 以便合并后的区间和下一个区间继续比较（并且删除后需要 i-- 避免循环向前推进）
var merge = function(intervals) {
  const res = [];
  intervals.sort((a, b) => {
    return a[0] - b[0];
  })
  for(let i=0; i<intervals.length; i++) {
    const item = intervals[i];
    const next = intervals[i+1] || [Infinity, Infinity];  // 使用 [Infinity, Infinity]，是当 i 循环到最后时可以有一个 next 并且不会被前面的合并
    if (item[1] >= next[0]) {
      item[1] = Math.max(next[1], item[1]);
      intervals.splice(i+1, 1);
      i--;
      continue;
    }
    res.push(item);
  }
  return res;
};