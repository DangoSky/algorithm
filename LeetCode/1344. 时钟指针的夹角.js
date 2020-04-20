/* 
给你两个数 hour 和 minutes 。请你返回在时钟上，由给定时间的时针和分针组成的较小角的角度（60 单位制）
*/

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */

// 时针走一格是 30°，分针走一格是 6°，而分针每走一格对应的时针会走 0.5°（分针走一格表示过了 1/60 小时，1/60 * 30 = 0.5）。
// 所以 m 点 n 分时，时针走了 30 * m + 0.5 * m，分针走了 6 * n，它们的夹角是 `|30 * m - 5.5 * n|`。
// 但因为小时可能为 24 小时制，所以 m 需要去对 12 取余；以及形成的夹角可能是更大的那个，所以还需要再判断取小的那个。
var angleClock = function(hour, minutes) {
  hour = hour % 12;
  const res = Math.abs(30 * hour - 5.5 * minutes);
  return Math.min(res, 360 - res);
};

