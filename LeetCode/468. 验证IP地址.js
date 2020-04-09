/* 
编写一个函数来验证输入的字符串是否是有效的 IPv4 或 IPv6 地址。
IPv4 地址由十进制数和点来表示，每个地址包含4个十进制数，其范围为 0 - 255， 用(".")分割。比如，172.16.254.1；
同时，IPv4 地址内的数不会以 0 开头。比如，地址 172.16.254.01 是不合法的。
IPv6 地址由8组16进制的数字来表示，每组表示 16 比特。这些组数字通过 (":")分割。比如,  2001:0db8:85a3:0000:0000:8a2e:0370:7334 是一个有效的地址。而且，我们可以加入一些以 0 开头的数字，字母可以使用大写，也可以是小写。所以， 2001:db8:85a3:0:0:8A2E:0370:7334 也是一个有效的 IPv6 address地址 (即，忽略 0 开头，忽略大小写)。
然而，我们不能因为某个组的值为 0，而使用一个空的组，以至于出现 (::) 的情况。 比如， 2001:0db8:85a3::8A2E:0370:7334 是无效的 IPv6 地址。
同时，在 IPv6 地址中，多余的 0 也是不被允许的。比如， 02001:0db8:85a3:0000:0000:8a2e:0370:7334 是无效的。
说明: 你可以认为给定的字符串里没有空格或者其他特殊字符。

示例 1:
输入: "172.16.254.1"
输出: "IPv4"
解释: 这是一个有效的 IPv4 地址, 所以返回 "IPv4"。

示例 2:
输入: "2001:0db8:85a3:0:0:8A2E:0370:7334"
输出: "IPv6"
解释: 这是一个有效的 IPv6 地址, 所以返回 "IPv6"。

示例 3:
输入: "256.256.256.256"
输出: "Neither"
解释: 这个地址既不是 IPv4 也不是 IPv6 地址。
*/

/**
 * @param {string} IP
 * @return {string}
 */

// 使用正则匹配。先将字符串转化为数组，如果数组长度为 4 的话进入 IPv4 的判断逻辑；数组长度是 8 的话进入 IPv6 的判断逻辑
// IPv6 的话只要每组数都是4位以内的16进制数就可以了
// IPv4 的话每组数要是3位以内（考虑到前导0的情况即可能为 000，所以对 0 做特殊处理），并且要小于或等于 255
var validIPAddress = function(IP) {
  const arr4 = IP.split('.');
  const arr6 = IP.split(':');
  if (arr4.length === 4) {
    if (arr4.every(item => {
      return new RegExp(/^0$|^([1-9](\d){0,2})$/).test(item) && item <= 255;
    })) {
      return 'IPv4';
    } 
  }
  if (arr6.length === 8) {
    if (arr6.every(item => {
      return new RegExp(/^[0-9a-fA-F]{1,4}$/).test(item);
    })) {
      return 'IPv6'
    }
  }
  return 'Neither';
};

/* 
按 ip 地址的格式要求一条条规则进行校验
IPV4：
  1. 由三个 . 间隔开分成四组
  2. 每组只能有数字字符且不能为空，且大于 0 小于等于 255
  3. 每组不能有前导 0
IPV6：
  1. 由七个 : 间隔开分组八组
  2. 每组只能是十六进制中允许的字符 0-9 或 a-f 或 A-F
  3. 每组不能为空，且长度不能大于 4
*/
var validIPAddress = function(IP) {
  const isIpv4 = (function judgeIpv4(str) {
    const arr4 = str.split('.');
    if (arr4.length !== 4) {
      return false;
    }
    for(let i=0; i<arr4.length; i++) {
      const item = arr4[i];
      if (
        (item[0] === '0' && item.length !== 1) ||   // 判断是否有前导0
        item.length === 0 ||
        item.length > 3
      ) {
        return false;;
      }
      const num = parseInt(item);
      if (num < 0 || num > 255) {
        return false;
      }
      for(let j=0; j<item.length; j++) {
        if (item[j] < '0' || item[j] > '9') {
          return false;
        }
      }  
    }
    return true;
  })(IP);

  const isIpv6 = (function judgeIpv6(str) {
    const arr6 = str.split(':');
    if (arr6.length !== 8) {
      return false;
    }
    for(let i=0; i<arr6.length; i++) {
      const item = arr6[i];
      // ipV6 允许有前导0
      if (item.length === 0 || item.length > 4) {
        return false;
      }
      for(let j=0; j<item.length; j++) {
        if (
          (item[j] < '0' || item[j] > '9') &&
          (item[j] < 'a' || item[j] > 'f') &&
          (item[j] < 'A' || item[j] > 'F')
        ) {
          return false;
        }
      }
    }
    return true;
  })(IP);
  return isIpv4 ? 'IPv4' : (isIpv6 ? 'IPv6' : 'Neither');
}
