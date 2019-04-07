/* 
  在一个小镇里，按从 1 到 N 标记了 N 个人。传言称，这些人中有一个是小镇上的秘密法官。

  如果小镇的法官真的存在，那么：
  小镇的法官不相信任何人。
  每个人（除了小镇法官外）都信任小镇的法官。
  只有一个人同时满足属性 1 和属性 2 。
  给定数组 trust，该数组由信任对 trust[i] = [a, b] 组成，表示标记为 a 的人信任标记为 b 的人。

  如果小镇存在秘密法官并且可以确定他的身份，请返回该法官的标记。否则，返回 -1。
*/


var findJudge = function(N, trust) {
  if(trust.length === 0)  return true;
  // 用于标记有多少个人信任这个人
  let trustNum = [];
  // 用于标记这个人是否信任别人，是的话则为true
  let mark = [];
  for(let i=0; i<trust.length; i++) {
    trustNum[trust[i][1]] = trustNum[trust[i][1]] ? trustNum[trust[i][1]] + 1 : 1;
    mark[trust[i][0]] = true;
  }
  // 若有N-1个人信任，并且自身没有信任别人就返回true
  for(let i=1; i<=N; i++) {
    if(trustNum[i] === N - 1 && !mark[i]) return i;
  }
  return -1;
};
console.log(findJudge(2, [[1,2]]));
console.log(findJudge(3, [[1,3],[2,3]]));
console.log(findJudge(3, [[1,3],[2,3],[3,1]]));
console.log(findJudge(3, [[1,2],[2,3]]));
console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]]));