/* 
  给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
  如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
  注意你不能在买入股票前卖出股票。

  示例 1:
  输入: [7,1,5,3,6,4]
  输出: 5
  解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
      
  示例 2:
  输入: [7,6,4,3,1]
  输出: 0
  解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
*/


var maxProfit = function(prices) {
  let min = prices[0];
  let max = 0;
  for(let i=0; i<prices.length; i++) {
    if(prices[i] < min) {
      min = prices[i];
    }
    if(prices[i] - min > max) {
      max = prices[i] - min;
    } 
  }
  return max;
};


var maxProfit = function(prices) {
  let max = 0;
  let res = 0;
  for(let i=1; i<prices.length; i++) {
    max += prices[i] - prices[i-1];
    if(max > 0 && max > res) {
      res = max;
    }
    else if(max < 0) {
      max = 0;
    }
  }
  return res;
};
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([2,4,1]));