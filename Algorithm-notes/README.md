# 算法思想

+ [质数判断和筛选](#质数判断和筛选)
+ [二分查找](#二分查找)
+ [十大排序](#十大排序)
  + [冒泡排序](#冒泡排序)
    + [单向冒泡](#单向冒泡)
    + [双向冒泡](#双向冒泡)
  + [选择排序](#选择排序)
  + [插入排序](#插入排序)
  + [快速排序](#快速排序)
    + [快速排序之填坑](#快速排序之填坑)
    + [快速排序之交换](#快速排序之交换)
  + [归并排序](#归并排序)
  + [桶排序](#桶排序)
  + [基数排序](#基数排序)
  + [计数排序](#计数排序)
    + [常规计数排序](#常规计数排序)
    + [优化计数排序](#优化计数排序)
  + [堆排序](#堆排序)
  + [希尔排序](#希尔排序)
+ [洗牌算法](#洗牌算法)
+ [二叉树](#二叉树)
  + [构造二叉树](#构造二叉树)
    + [根据先序遍历和中序遍历构造二叉树](#根据先序遍历和中序遍历构造二叉树)
    + [根据后序遍历和中序遍历构造二叉树](#根据后序遍历和中序遍历构造二叉树)
  + [遍历二叉树](#遍历二叉树)
    + [先序遍历](#先序遍历)
    + [中序遍历](#中序遍历)
    + [后序遍历](#后序遍历)
    + [层序遍历](#层序遍历)
  + [二叉排序树](#二叉排序树)
+ [KMP算法](#KMP算法)

# 质数判断和筛选

普通的质数判断方法。

```js
function judge(n) {
  for(let i=2, len=Math.sqrt(n); i<=len; i++) {
    if(n % i === 0)  return false;
  }
  return true;
}
```

厄拉多塞筛法，时间复杂度O(n * loglog n)：从 2 开始遍历，把 2 的倍数都标记为 false（表示不是素数），再从 2 的下一位素数 3 开始也同样标记其倍数。以此类推，最后仍为 true 的则为素数。

```js
function choosePrimes(n = 10000) {
  // 标记是否为素数
  let mark = Array(n).fill(true);
  // 存放素数
  let primes = [];
  let index = 0;
  for(let i=2; i<=n; i++) {
    // 如果i是质数则放入primes数组，并标记i的倍数
    if(mark[i] === true) {
      primes[index++] = i;
      for(let j=i+i; j<=n; j+=i) {
        mark[j] = false;
      }
    }
  }
}
```

# 二分查找


#### 迭代

第一种写法，右边界初始值取为 `arr.length-1`，搜索区间是一个闭区间（更容易理解）。

```js
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while(left <= right) {
    let mid = parseInt((right - left) / 2) + left;
    // mid 不使用 parseInt((left + right) / 2) 来计算是为了防止大数相加会溢出
    if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return false;
}
```

第二种写法，右边界初始值取为 `arr.length`，呈现的搜索区间是左闭右开。

```js
function binarySearch(arr, target) {
  let left = 0, right = arr.length;
  // 因为数组区间是左闭右开的，所以当left===right时，其实区间内已经没有值了
  while(left < right) {
    let mid = parseInt((right - left) / 2) + left;
    if (arr[mid] > target) {
      // 因为是右开的，所以这里的mid不用像第一种写法那样再-1了，此时的数组搜索区间已经是[left, mid - 1]
      right = mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return false;
}
```

#### 递归

```js
function binarySearch(arr, target) {
  return (function fn(left, right) {
    if (left > right) {
      return false;
    }
    let mid = parseInt((right - left) / 2) + left;
    if (arr[mid] > target) {
      return fn(left, mid - 1);
    } else if (arr[mid] < target) {
      return fn(mid + 1, right);
    } else {
      return mid;
    }
  })(0, arr.length - 1)
}
```

#### 使用二分查找排序数组中元素的第一个和最后一个位置

[Leetcode 传送门](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

```js
var searchRange = function(nums, target) {
  // 当turnLeft是true时表示找左边界，为false时表示找右边界
  function binarySearch(arr, target, turnLeft) {
    let left = 0, right = arr.length - 1;
    while(left <= right) {
      let mid = parseInt((right - left) / 2) + left;
      // 如果当前的数组元素是target并且是要找左边界，则将右边界置为mid-1，并向左边迭代。
      // 如果此时arr[mid]就是左数第一个target了，那么循环结束后找不到target，left也会加1回到此时的mid
      if (arr[mid] > target || (turnLeft && arr[mid] === target)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
  function judge(index) {
    return nums[index] === target ? index : -1;
  }

  let indexLeft = judge(binarySearch(nums, target, true));
  // 找右边界时，当退出循环的时候，左边的部分都大于或等于target，所以需要将下标-1
  let indexRight = judge(binarySearch(nums, target, false) - 1);
  return [indexLeft, indexRight];
};
```

# 十大排序

推荐一个[数据结构和算法动态可视化](https://visualgo.net/en)工具，可以查看各种算法的动画演示。另外附上 [C++版的十大排序](https://github.com/DangoSky/algorithm/blob/master/DataStructure-homework/Experiment%EF%BC%88C%2B%2B%EF%BC%89/%E5%AE%9E%E9%AA%8C%E5%9B%9B%EF%BC%9A%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95/%E5%8D%81%E5%A4%A7%E6%8E%92%E5%BA%8F.cpp)（习惯了写 `JavaScript`，所以这 `C++` 代码写得有些丑，请不要介意哈）。可以[在这里测试代码](https://leetcode-cn.com/problems/sort-an-array/)。

![十大排序时间空间复杂度比较图](https://user-gold-cdn.xitu.io/2016/11/29/4abde1748817d7f35f2bf8b6a058aa40?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## 冒泡排序

通过相邻元素的比较和交换，使得每一趟循环都能找到未有序数组的最大值或最小值。

+ 最好：`O(n)`，只需要冒泡一次数组就有序了。
+ 最坏：`O(n²)`
+ 平均：`O(n²)`

### 单向冒泡

```js
function bubbleSort(nums) {
  for(let i=0, len=nums.length; i<len-1; i++) {
    // 如果一轮比较中没有需要交换的数据，则说明数组已经有序。主要是对[5,1,2,3,4]之类的数组进行优化
    let mark = true;
    // i 表示已经排好序的个数，所以只需要循环 len-1-i 次
    for(let j=0; j<len-1-i; j++) {
      if(nums[j] > nums[j+1]) {
        [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
        mark = false;
      }
    }
    if(mark)  return;
  }
}
```

## 双向冒泡

普通的冒泡排序在一趟循环中只能找出一个最大值或最小值，双向冒泡则是多一轮循环既找出最大值也找出最小值。

```js
function bubbleSort_twoWays(nums) {
  let low = 0;
  let high = nums.length - 1;
  while(low < high) {
    let mark = true;
    // 找到最大值放到右边
    for(let i=low; i<high; i++) {
      if(nums[i] > nums[i+1]) {
        [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
        mark = false;
      }
    }
    high--;
    // 找到最小值放到左边
    for(let j=high; j>low; j--) {
      if(nums[j] < nums[j-1]) {
        [nums[j], nums[j-1]] = [nums[j-1], nums[j]];
        mark = false;
      }
    }
    low++;
    if(mark)  return;
  }
}
```

## 选择排序

和冒泡排序相似，区别在于选择排序是将每一个元素和它后面的元素进行比较和交换。  

+ 最好：`O(n²)`
+ 最坏：`O(n²)`
+ 平均：`O(n²)`

```js
function selectSort(nums) {
  for(let i=0, len=nums.length; i<len; i++) {
    for(let j=i+1; j<len; j++) {
      // 将 nums[i] 和它后面的元素进行比较，使 nums[i] 一直维持最小
      if(nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
}
```

## 插入排序

以第一个元素作为有序数组，其后的元素通过在这个已有序的数组中找到合适的位置并插入。

+ 最好：`O(n)`，原数组已经是升序的。
+ 最坏：`O(n²)`
+ 平均：`O(n²)`

```js
function insertSort(nums) {
  for(let i=1, len=nums.length; i<len; i++) {
    let temp = nums[i];
    let j = i;
    while(j > 0 && temp < nums[j-1]) {
      nums[j] = nums[j-1];
      j--;
    }
    nums[j] = temp;
  }
}
```

## 快速排序

选择一个元素作为基数（通常是第一个元素），把比基数小的元素放到它左边，比基数大的元素放到它右边（相当于二分），再不断递归基数左右两边的序列。

+ 最好：`O(n * logn)`，所有数均匀分布在基数的两边，此时的递归就是不断地二分左右序列。 
+ 最坏：`O(n²)` ，所有数都分布在基数的一边，此时划分左右序列就相当于是插入排序。
+ 平均：`O(n * logn)`

参考学习链接：

[算法 3：最常用的排序——快速排序](https://wiki.jikexueyuan.com/project/easy-learn-algorithm/fast-sort.html)

[三种快速排序以及快速排序的优化](https://blog.csdn.net/insistGoGo/article/details/7785038)

应用：TopK问题

[数组中的第K个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)

### 快速排序之填坑

默认取第一个数作为基数，所以先从右边向中间推。遇到小于基数的数就赋给左边的坑位（一开始是基数的位置），而这个小于基数的数则由基数填上，这样基数右边的数就都大于基数了。右边保留原先的值等之后被左边的值填上。

```js
function quickSort(nums) {
  // 递归排序基数左右两边的序列
  function recursive(arr, left, right) {
    if(left >= right)  return;
    let index = partition(arr, left, right);
    recursive(arr, left, index - 1);
    recursive(arr, index + 1, right);
    return arr;
  }
  // 将小于基数的数放到基数左边，大于基数的数放到基数右边，并返回基数的位置
  function partition(arr, left, right) {
    // 取第一个数为基数
    let temp = arr[left];
    while(left < right) {
      // 因为是取第一书记作为IE
      while(left < right && arr[right] >= temp)  right--;
      arr[left] = arr[right];
      while(left < right && arr[left] < temp)  left++;
      arr[right] = arr[left];
    }
    // 修改基数的位置
    arr[left] = temp;
    return left;
  }
  recursive(nums, 0, nums.length-1);
}
```

### 快速排序之交换

从左右两边向中间推进的时候，遇到不符合的数就两边交换值。

```js
function quickSort1(nums) {
  function recursive(arr, left, right) {
    if(left >= right)  return;
    let index = partition(arr, left, right);
    recursive(arr, left, index - 1);
    recursive(arr, index + 1, right);
    return arr;
  }
  function partition(arr, left, right) {
    let temp = arr[left];
    let p = left + 1;
    let q = right;
    while(p <= q) {
      while(p <= q && arr[p] < temp)  p++;
      while(p <= q && arr[q] > temp)  q--;
      if(p <= q) {
        [arr[p], arr[q]] = [arr[q], arr[p]];
        // 交换值后两边各向中间推进一位
        p++;
        q--;
      }
    }
    // 修改基数的位置
    [arr[left], arr[q]] = [arr[q], arr[left]];
    return q;
  }
  recursive(nums, 0, nums.length-1);
}
```

## 归并排序

递归将数组平分为两个序列，并有序合并这两个序列。

+ 最好：`O(n * logn)`
+ 最坏：`O(n * logn)`
+ 平均：`O(n * logn)`  

参考学习链接：

[图解排序算法(四)之归并排序](https://www.cnblogs.com/chengxiao/p/6194356.html)

```js
function mergeSort(nums) {
  // 有序合并两个数组
  function merge(l1, r1, l2, r2) {
    let arr = [];
    let index = 0;
    let i = l1, j = l2;
    while(i <= r1 && j <= r2) {
      arr[index++] = nums[i] < nums[j] ? nums[i++] : nums[j++];
    }
    while(i <= r1)  arr[index++] = nums[i++];
    while(j <= r2)  arr[index++] = nums[j++];
    // 将有序合并后的数组修改回原数组
    for(let t=0; t<index; t++) {
      nums[l1 + t] = arr[t];
    }
  }
  // 递归将数组分为两个序列
  function recursive(left, right) {
    if(left >= right)  return;
    // 比起(left+right)/2，更推荐下面这种写法，可以避免数溢出
    let mid = parseInt((right - left) / 2) + left;
    recursive(left, mid);
    recursive(mid+1, right);
    merge(left, mid, mid+1, right);
    return nums;
  }
  recursive(0, nums.length-1);
}
```

## 桶排序

取 n 个桶，根据数组的最大值和最小值确认每个桶存放的数的区间，将数组元素插入到相应的桶里，最后再合并各个桶。

+ 最好：`O(n)`，每个数都在分布在一个桶里，这样就不用将数插入排序到桶里了(类似于计数排序以空间换时间)。
+ 最坏：`O(n²)`，所有的数都分布在一个桶里。
+ 平均：`O(n + k)`，k表示桶的个数。

参考学习链接：

[拜托，面试别再问我桶排序了！！！](http://zhuanlan.51cto.com/art/201811/586129.htm)

```js
function bucketSort(nums) {
  // 桶的个数，只要是正数即可
  let num = 5;
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  // 计算每个桶存放的数值范围，至少为1，
  let range = Math.ceil((max - min) / num) || 1;
  // 创建二维数组，第一维表示第几个桶，第二维表示该桶里存放的数
  let arr = Array.from(Array(num)).map(() => Array().fill(0));
  nums.forEach(val => {
    // 计算元素应该分布在哪个桶
    let index = parseInt((val - min) / range);
    // 防止index越界，例如当[5,1,1,2,0,0]时index会出现5
    index = index >= num ? num - 1 : index;
    let temp = arr[index];
    // 插入排序，将元素有序插入到桶中
    let j = temp.length - 1;
    while(j >= 0 && val < temp[j]) {
      temp[j+1] = temp[j];
      j--;
    }
    temp[j+1] = val;
  })
  // 修改回原数组
  let res = [].concat.apply([], arr);
  nums.forEach((val, i) => {
    nums[i] = res[i];
  })
}
```

## 基数排序

使用十个桶 0-9，把每个数从低位到高位根据位数放到相应的桶里，以此循环最大值的位数次。**但只能排列正整数，因为遇到负号和小数点无法进行比较**。

+ 最好：`O(n * k)`，k表示最大值的位数。
+ 最坏：`O(n * k)`
+ 平均：`O(n * k)`

参考学习链接：

[算法总结系列之五: 基数排序(Radix Sort)](https://www.cnblogs.com/sun/archive/2008/06/26/1230095.html)

```js
function radixSort(nums) {
  // 计算位数
  function getDigits(n) {
    let sum = 0;
    while(n) {
      sum++;
      n = parseInt(n / 10);
    }
    return sum;
  }
  // 第一维表示位数即0-9，第二维表示里面存放的值
  let arr = Array.from(Array(10)).map(() => Array());
  let max = Math.max(...nums);
  let maxDigits = getDigits(max);
  for(let i=0, len=nums.length; i<len; i++) {
    // 用0把每一个数都填充成相同的位数
    nums[i] = (nums[i] + '').padStart(maxDigits, 0);
    // 先根据个位数把每一个数放到相应的桶里
    let temp = nums[i][nums[i].length-1];
    arr[temp].push(nums[i]);
  }
  // 循环判断每个位数
  for(let i=maxDigits-2; i>=0; i--) {
    // 循环每一个桶
    for(let j=0; j<=9; j++) {
      let temp = arr[j]
      let len = temp.length;
      // 根据当前的位数i把桶里的数放到相应的桶里
      while(len--) {
        let str = temp[0];
        temp.shift();
        arr[str[i]].push(str);
      }
    }
  }
  // 修改回原数组
  let res = [].concat.apply([], arr);
  nums.forEach((val, index) => {
    nums[index] = +res[index];
  })
}
```

## 计数排序

以数组元素值为键，出现次数为值存进一个临时数组，最后再遍历这个临时数组还原回原数组。因为 JavaScript 的数组下标是以字符串形式存储的，所以**计数排序可以用来排列负数，但不可以排列小数**。

+ 最好：`O(n + k)`，k是最大值和最小值的差。
+ 最坏：`O(n + k)`
+ 平均：`O(n + k)`

### 常规计数排序

```js
function countingSort(nums) {
  let arr = [];
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  // 装桶
  for(let i=0, len=nums.length; i<len; i++) {
    let temp = nums[i];
    arr[temp] = arr[temp] + 1 || 1;
  }
  let index = 0;
  // 还原原数组
  for(let i=min; i<=max; i++) {
    while(arr[i] > 0) {
      nums[index++] = i;
      arr[i]--;
    }
  }
}
```

### 优化计数排序

把每一个数组元素都加上 min 的相反数，来避免特殊情况下的空间浪费，通过这种优化可以把所开的空间大小从 max+1 降低为 max-min+1，max 和 min 分别为数组中的最大值和最小值。

比如数组 [103, 102, 101, 100]，普通的计数排序需要开一个长度为 104 的数组，而且前面 100 个值都是 undefined，使用该优化方法后可以只开一个长度为 4 的数组。

```js
function countingSort(nums) {
  let arr = [];
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  // 加上最小值的相反数来缩小数组范围
  let add = -min;
  for(let i=0, len=nums.length; i<len; i++) {
    let temp = nums[i];
    temp += add;
    arr[temp] = arr[temp] + 1 || 1;
  }
  let index = 0;
  for(let i=min; i<=max; i++) {
    let temp = arr[i+add];
    while(temp > 0) {
      nums[index++] = i;
      temp--;
    }
  }
}
```

## 堆排序

根据数组建立一个堆（类似完全二叉树），每个结点的值都大于左右结点（最大堆，通常用于升序），或小于左右结点（最小堆，通常用于降序）。对于升序排序，先构建最大堆后，交换堆顶元素（表示最大值）和堆底元素，每一次交换都能得到未有序序列的最大值。重新调整最大堆，再交换堆顶元素和堆底元素，重复 n-1 次后就能得到一个升序的数组。  

+ 最好：`O(n * logn)`，logn是调整最大堆所花的时间。
+ 最坏：`O(n * logn)`
+ 平均：`O(n * logn)`

参考学习链接：

[常见排序算法 - 堆排序 (Heap Sort)](http://bubkoo.com/2014/01/14/sort-algorithm/heap-sort/)

[图解排序算法(三)之堆排序](https://www.cnblogs.com/chengxiao/p/6129630.html)

```js
function heapSort(nums) {
  // 调整最大堆，使index的值大于左右节点
  function adjustHeap(nums, index, size) {
    // 交换后可能会破坏堆结构，需要循环使得每一个父节点都大于左右结点
    while(true) {
      let max = index;
      let left = index * 2 + 1;   // 左节点
      let right = index * 2 + 2;  // 右节点
      if(left < size && nums[max] < nums[left])  max = left;
      if(right < size && nums[max] < nums[right])  max = right;
      // 如果左右结点大于当前的结点则交换，并再循环一遍判断交换后的左右结点位置是否破坏了堆结构（比左右结点小了）
      if(index !== max) {
        [nums[index], nums[max]] = [nums[max], nums[index]];
        index = max;
      }
      else {
        break;
      }
    }
  }
  // 建立最大堆
  function buildHeap(nums) {
    // 注意这里的头节点是从0开始的，所以最后一个非叶子结点是 parseInt(nums.length/2)-1
    let start = parseInt(nums.length / 2) - 1;
    let size = nums.length;
    // 从最后一个非叶子结点开始调整，直至堆顶。
    for(let i=start; i>=0; i--) {
      adjustHeap(nums, i, size);
    }
  }

  buildHeap(nums);
  // 循环n-1次，每次循环后交换堆顶元素和堆底元素并重新调整堆结构
  for(let i=nums.length-1; i>0; i--) {
    [nums[i], nums[0]] = [nums[0], nums[i]];
    adjustHeap(nums, 0, i);
  }
}
```

## 希尔排序

通过某个增量 gap，将整个序列分给若干组，从后往前进行组内成员的比较和交换，随后逐步缩小增量至 1。希尔排序类似于插入排序，只是一开始向前移动的步数从 1 变成了 gap。

+ 最好：`O(n * logn)`，步长不断二分。
+ 最坏：`O(n * logn)`
+ 平均：`O(n * logn)`

参考学习链接：

[图解排序算法(二)之希尔排序](https://www.cnblogs.com/chengxiao/p/6104371.html)

```js
function shellSort(nums) {
  let len = nums.length;
  // 初始步数
  let gap = parseInt(len / 2);
  // 逐渐缩小步数
  while(gap) {
    // 从第gap个元素开始遍历
    for(let i=gap; i<len; i++) {
      // 逐步其和前面其他的组成员进行比较和交换
      for(let j=i-gap; j>=0; j-=gap) {
        if(nums[j] > nums[j+gap]) {
          [nums[j], nums[j+gap]] = [nums[j+gap], nums[j]];
        }
        else {
          break;
        }
      }
    }
    gap = parseInt(gap / 2);
  }
}
```

# 洗牌算法

> [洗牌算法](https://labuladong.gitbook.io/algo/suan-fa-si-wei-xi-lie/xi-pai-suan-fa)

洗牌算法其实就是随机打乱数组。随机打乱一个长度为 n 的数组，相当于是找它的全排列，也就是有 `n!` 种，即数组打乱结果总共有 `n!` 种。实现思路是：遍历数组元素，将当前元素和前面未有序序列中任意一个数进行交换，保证每个元素和其他元素交换的概率是等大的。

```js
let arr = [0, 1, 2, 3, 4];
for(let i=arr.length-1; i>0; i--) {
  let index = parseInt(Math.random() * (i + 1));
  [arr[i], arr[index]] = [arr[index], arr[i]];
}
```

有一种更简单的方法也可以打乱数组：``arr.sort(() => Math.random() - 0.5)``。但据说这种方法得到的数组并不能达到真正的乱序，具体原因我现在还不清楚，得之后我深入研究了再做补充。

- 如何验证打乱后的数组是否真的乱序了？
  - 方法一：先列出该数组的全排列。将该数组打乱 100 万次，记录每次打乱后出现的结果频次（哈希）。如果是完全乱序的话，各个结果出现的频次应该是差不多大的。
  - 方法二：取一个数组，里面只有一个元素是 1，其他元素值都为 0。将该数组打乱 100 万次，1 出现在每个位置上的次数应该是差不多大的。

# 二叉树

> 从第 0 层开始算起，给每个节点标号，第一个节点标号为 1。每层的第一个节点是 `2^n`，每层有 `2^n` 个节点。
>
> 对于第 n 层，从第 0 层到第 n-1 层，总共有 `2^n - 1` 个节点，到第 n 层累计有 `2^(n+1）- 1` 个节点。


## 构造二叉树

### 根据先序遍历和中序遍历构造二叉树

```js
var buildTree = function(preorder, inorder) {
  function build(preL, preR, inL, inR) {
    if(preL > preR || inL > inR) {
      return null;
    }
    let node = new TreeNode(preorder[preL]);
    // 在中序遍历中找出根节点，以此区分左右子树
    let index = 0;
    for(let i=inL; i<=inR; i++) {
      if(inorder[i] === preorder[preL]) {
        index = i;
        break;
      }
    }
    // 左子树的结点数量
    let leftNum = index - inL;
    // 递归构建左右子树
    node.left = build(preL+1, preL+leftNum, inL, index-1);
    node.right = build(preL+leftNum+1, preR, index+1, inR);
    return node;
  }
  return build(0, preorder.length-1, 0, inorder.length-1);  
};
```

### 根据后序遍历和中序遍历构造二叉树

```js
var buildTree = function(inorder, postorder) {
  function build(l1, r1, l2, r2) {
    if(l1 > r1 || l2 > r2)  return null;
    let index = 0;
    let root = new TreeNode();
    root.val = postorder[r2];
    for(let i=l1; i<=r1; i++) {
      if(inorder[i] === postorder[r2]) {
        index = i;
        break;
      }
    }
    let sum = index - l1;
    root.left = build(l1, index - 1, l2, l2 + sum - 1)
    root.right = build(index + 1, r1, l2 + sum, r2 - 1); 
    return root;
  }
  return build(0, inorder.length - 1, 0, postorder.length - 1);
};
```

## 遍历二叉树

### 先序遍历

#### 递归

```js
function preorderTraversal(root) {
  let res = [];
  function print(root) {
    if(!root)  return root;
    res.push(root.val);
    print(root.left);
    print(root.right);
  }
  print(root);
  return res;
};
```

#### 迭代

```js
function preorderTraversal(root) {
  if(root === null)  return [];
  let res = [];
  let stack = [root];
  while(stack.length) {
    let top = stack.shift();
    res.push(top.val);
    // 使用 unshift 而不是 push 才能保证左子树会先于右子树被访问到
    if(top.right)  stack.unshift(top.right);
    if(top.left)   stack.unshift(top.left);
  }
  return res;
}
```

### 中序遍历

#### 递归

```js
function inorderTraversal(root) {
  let res = [];
  function print(root) {
    if(root === null) return root;
    print(root.left);
    res.push(root.val);
    print(root.right);
  }
  print(root);
  return res;
};
```

#### 迭代

```js
function inorderTraversal(root) {
  let cur = root;
  let stack = [];
  let res = [];
  while(cur || stack.length !== 0) {
    // 先遍历左子树到底部
    if(cur) {
      stack.unshift(cur);
      cur = cur.left;
    }
    // 再遍历右子树
    else {
      cur = stack.shift();
      res.push(cur.val);
      cur = cur.right;
    }
  }
  return res;
};
```

### 后序遍历

#### 递归

```js
var postorderTraversal = function(root) {
  let res = [];
  function print(root) {
    if(!root)  return root;
    print(root.left);
    print(root.right);
    res.push(root.val);
  }
  print(root);
  return res;
};
```

#### 迭代

```js
function postorderTraversal(root) {
  if(root === null)  return [];
  let res = [];
  let stack = [root];
  while(stack.length) {
    let top = stack.shift();
    // 使用 unshift 而不是 push 才能保证右子树会先于左子树被访问到，只要再把值插入到结果数组头部即可得到后序遍历
    if(top.left)  stack.unshift(top.left);
    if(top.right)  stack.unshift(top.right);
    res.unshift(top.val);
  }
  return res;
}
```

### 层序遍历

```js
function levelOrder(root) {
  if(root === null)  return [];
  let queue = [];
  let res = [];
  queue.push(root);
  // 每一层的节点数量
  let sum = 1;
  while(queue.length) {
    let temp = [];
    while(sum--) {
      let top = queue.shift();
      temp.push(top.val);
      if(top.left)  queue.push(top.left);
      if(top.right)  queue.push(top.right);
    }
    res.push(temp);
    sum = queue.length;
  }
  return res;
};
```

## 二叉排序树

二叉排序树 / 二叉查找树 / 二叉搜索树：左子树上所有结点的值均小于它的根结点的值，右子树上所有结点的值均大于或等于它的根结点的值，并且左右子树都是二叉排序树。所以只要构建一棵二叉排序树，对其进行中序遍历即可得到一个升序序列。

```js
class BinaryTree {
  constructor() {
    this.root = {
      val: undefined,
      lchild: {},
      rchild: {}
    };
  }
  // 根据参数数组构建二叉排序树
  createBST(arr) {
    arr.forEach(val => {
      this.insertBST(this.root, val);
    })
  }
  // 向二叉排序树中插入结点
  insertBST(root, val) {
    // 空树或叶子结点
    if(root.val === undefined) {
      root.val = val;
      root.lchild = {};
      root.rchild = {};
    }
    else if(val < root.val) {
      this.insertBST(root.lchild, val);
    }
    else if(val >= root.val) {
      this.insertBST(root.rchild, val);
    }
  }
  // 中序遍历(左根右)，返回一个升序的数组
  ascendingOrder() {
    let res = [];
    function fn(root) {
      if(root.val === undefined)  return;
      fn(root.lchild);
      res.push(root.val);
      fn(root.rchild);
    }
    fn(this.root);
    return res;
  }
  // 中序遍历(右根左)，返回一个降序的数组
  descendingOrder() {
    let res = [];
    function fn(root) {
      if(root.val === undefined)  return;
      fn(root.rchild);
      res.push(root.val);
      fn(root.lchild);
    }
    fn(this.root);
    return res;
  }
}

// 测试代码
let tree = new BinaryTree();
tree.createBST([22, 44]);
tree.createBST([2, 4, 165, 516, -316, 165, 0, 1, 164]);
tree.insertBST(tree.root, 15);
console.log(tree.ascendingOrder());
console.log(tree.descendingOrder());
```

# KMP算法

在一个字符串 str 中查找字符串 s，暴力算法从每个 str[i] 开始匹配s，如果遇到不匹配的字符就回到 i+1 的位置上继续从头匹配，所以时间复杂度是 `0(n * m)`。KMP 算法则是在每次遇到不匹配的字符时，不去回溯 i，而是根据不匹配时 j 的 next 值去回溯模式串 s。所以 KMP 算法的时间复杂度是 `O(n + m)`。

[测试地址](https://leetcode-cn.com/problems/implement-strstr/)

参考学习链接：

[阮一峰的网络日志：字符串匹配的KMP算法](http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html)

[KMP 算法](https://subetter.com/algorithm/kmp-algorithm.html)

```js
  // 计算next数组，next[i]表示str[i]前面字符串的最长公共前后缀
  // 如 abcdabe，next[6]=2，最长公共前后缀是ab。
  function getNext(str) {
    let len = str.length;
    // i表示str的下标
    let i = 0, j = -1;
    let next = [];
    // next[0]前面没有字符串了，所以置为-1
    next[0] = -1;
    // 因为if中是先i++再给next[i]赋值，所以循环到len-1就够了
    while(i < len - 1) {
      if(j === -1 || str[i] === str[j]) {
        i++;
        j++;
        next[i] = j;
      }
      else {
        j = next[j];
      }
    }
    return next;
  }

  function kmp(str, s) {
    let next = getNext(s);
    let len1 = str.length, len2 = s.length;
    let i = 0, j = 0;
    while(i <len1 && j < len2) {
      if(j === -1 || str[i] === s[j]) {
        i++;
        j++;
      }
      else {
        j = next[j];
      }
    }
    // 匹配成功，返回在str中第一次出现s的下标
    if(j === len2)  return i - j;
    // 没有匹配到就返回-1
    return -1;
  }
```
