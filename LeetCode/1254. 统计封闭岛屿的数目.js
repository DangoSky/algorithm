/* 
  有一个二维矩阵 grid ，每个位置要么是陆地（记号为 0 ）要么是水域（记号为 1 ）。
  我们从一块陆地出发，每次可以往上下左右 4 个方向相邻区域走，能走到的所有陆地区域，我们将其称为一座「岛屿」。
  如果一座岛屿 完全 由水域包围，即陆地边缘上下左右所有相邻区域都是水域，那么我们将其称为 「封闭岛屿」。
  请返回封闭岛屿的数目。

  示例 1：
  输入：grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
  输出：2
  解释：
  灰色区域的岛屿是封闭岛屿，因为这座岛屿完全被水域包围（即被 1 区域包围）。

  1 <= grid.length, grid[0].length <= 100
  0 <= grid[i][j] <=1
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */

//  DFS。遍历二维矩阵，遇到陆地则对上下左右四个方向进行 DFS 查询。如果某个方向上的 DFS 遇到了边界则说明它不是封闭的，可以直接返回 false 结束 DFS
// 在 DFS 过程中遇到陆地的话，还需要把其标记为已遍历过（这里把它的值改成了 2），防止重复递归而爆栈（比如二维矩阵中有一个正方形的陆地，不标记的话它会在里面重复递归）
var closedIsland = function(grid) {
  function dfs(arr, x, y) {
    if (x < 0 || x >= arr.length || y < 0 || y >= arr[0].length) {
      return false;
    }
    // 遇到不是陆地则直接返回 true 表示从这个方向延伸出去是封闭的
    if (arr[x][y] !== 0) {
      return true;
    }
    // 标记为已访问过
    arr[x][y] = 2;
    // 选择一个陆地后就必须把它所在的岛屿上的所有位置遍历完，即使它有一个方向已经遇到了边界确定不是封闭岛屿
    // 如果没遍历完就结束的话相当于把一块岛屿分成了几个几块岛屿，如果原先的这块岛屿是封闭的，这样遍历就可能会得到几块封闭岛屿，导致结果大于答案值
    const left = dfs(arr, x, y-1);
    const right = dfs(arr, x, y+1);
    const top = dfs(arr, x-1, y);
    const bottom = dfs(arr, x+1, y);
    return left && right && bottom && top;
  }

  let ans = 0;
  for(let i=0; i<grid.length; i++) {
    const item = grid[i];
    for(let j=0; j<item.length; j++) {
      if (grid[i][j] === 0) {
        const res = dfs(grid, i, j);
        if (res) {
          ans++;
        }
      }
    }
  }
  return ans;
};


// BFS。从当前的岛屿开始，使用 BFS 先遍历它的上下左右四个方向，之后再遍历它们各自的四个方向（使用队列）
// 和 DFS 的区别在于，DFS 是一个方向递归到边界再去递归另一个方向，而 BFS 是先遍历完一个岛屿的四个方向后，再去遍历另一个岛屿的四个方向
var closedIsland = function(grid) {
  function bfs(arr, x, y) {
    const queue = [];
    queue.push({x, y});
    // 默认当前岛屿是封闭的
    let mark = 1;
    while(queue.length) {
      const top = queue.shift();
      const {x, y} = top;
      if (x < 0 || x >= arr.length || y < 0 || y >= arr[0].length) {
        mark = 0;
        continue;
      }
      if (arr[x][y] === 0) {
        arr[x][y] = 2;
        queue.push({x: x, y: y-1});
        queue.push({x: x, y: y+1});
        queue.push({x: x-1, y});
        queue.push({x: x+1, y});
      }
    }
    return mark;
  }
  let ans = 0;
  for(let i=0; i<grid.length; i++) {
    const item = grid[i];
    for(let j=0; j<item.length; j++) {
      if (grid[i][j] === 0) {
        ans = bfs(grid, i, j) ? ans + 1 : ans;;
      }
    }
  }
  return ans;
}
