#include <bits/stdc++.h>
using namespace std;
int len;  // 数组长度
int arr[10000];

// 打印数组
void print(int arr[]) {
  cout<<"打印数组"<<endl;
  for(int i=0; i<len; i++) {
    cout<<arr[i]<<" ";
  }
  cout<<endl;
}

// 使用随机数生成数组
void createArray(int arr[]) {
  cout<<"请输入要生成的数组的长度"<<endl;
  cin>>len;
  // 输入的数组长度必须大于0
  while(len <= 0) {
    cout<<"输入的数组长度不合法，请重新输入"<<endl;
    cin>>len;
  }
  int a, b;
  cout<<"请输入要生成的数的最小值"<<endl;
  cin>>a;
  cout<<"请输入要生成的数的最大值"<<endl;
  cin>>b;
  if(a > b) {
    cout<<"输入的最小值和最大值不合法，已自动纠正"<<endl;
    swap(a, b);
  }
  int index = 0;
  int n = len;
  while(n--) {
    arr[index++] = (rand() % (b - a + 1)) + a;
  }
  print(arr);
}

// 交换两个数
void swap(int &a, int &b) {
  int temp = b;
  b = a;
  a = temp;
}

// 冒泡排序
// 通过相邻元素的比较和交换，使得每一趟循环都能找到未有序数组的最大值或最小值
// 最好：O(n)，只冒泡一次数组就有序的情况。
// 最坏：O(n2)
// 平均：O(n2)
void bubbleSort(int arr[]) {
  for(int i=len-1; i>0; i--) {
    // 如果一轮比较中没有需要交换的数据，则说明数组已经有序。主要是对[5,1,2,3,4]之类的数组进行优化
    bool mark = true;
    for(int j=0; j<i; j++) {
      if(arr[j] > arr[j+1]) {
        swap(arr[j], arr[j+1]);
        mark = false;
      }
    }
    if(mark)  return;
  }
}

// 双向冒泡
// 普通的冒泡排序在一趟循环中只能找出一个最大值或最小值，双向冒泡则是多一轮循环既找出最大值也找出最小值
void bubbleSort_twoWays(int arr[]) {
  int low = 0;
  int high = len - 1;
  while(low < high) {
    bool mark = true;
    // 找到最大值放到右边
    for(int i=low; i<high; i++) {
      if(arr[i] > arr[i+1]) {
        swap(arr[i], arr[i+1]);
        mark = false;
      }
    }
    high--;
    // 找到最小值放到左边
    for(int i=high; i>low; i--) {
      if(arr[i] < arr[i-1]) {
        swap(arr[i], arr[i-1]);
        mark = false;
      }
    }
    low++;
    if(mark)  return;
  }
}

// 选择排序
// 和冒泡排序相似，区别在于选择排序是将每一个元素和它后面的每一个元素进行比较和交换，从而找到最小值
// 最好：O(n2)
// 最坏：O(n2)
// 平均：O(n2)
void selectSort(int arr[]) {
  for(int i=0; i<len; i++) {
    for(int j=i+1; j<len; j++) {
      if(arr[i] > arr[j]) {
        swap(arr[i], arr[j]);
      }
    }
  }
}

// 插入排序
// 以第一个元素作为有序数组，其后的元素通过在这个已有序的数组中找到合适的位置并插入
// 最好：O(n)，原数组已经是升序的  
// 最坏：O(n2)， 原数组已经是降序的
// 平均：O(n2)
void insertSort(int arr[]) {
  for(int i=1; i<len; i++) {
    int temp = arr[i];
    int j = i;
    while(j >= 0 && temp < arr[j-1]) {
      arr[j] = arr[j-1];
      j--;
    }
    arr[j] = temp;
  }
}

// 快速排序
// 选择一个元素作为基数（通常是第一个元素），把比基数小的元素放到它左边，比基数大的元素放到它右边（相当于二分），再不断递归基数左右两边的序列。
// 快速排序之填坑
// 从右边向中间推进的时候，遇到小于基数的数就赋给左边（一开始是基数的位置），右边保留原先的值等之后被左边的值填上。
// 最好：O(n * logn)，其他的数均匀分布在基数的两边，此时的递归就是不断地二分左右序列。
// 最坏：O(n2) ， 其他的数都分布在基数的一边，此时划分左右序列就相当于成了插入排序。
// 平均：O(n * logn)
void quickSort(int arr[], int left, int right) {
  if(left >= right)  return;
  // 取第一个数为基数
  int temp = arr[left]; 
  int index = 0;
  // 将小于基数的数放到基数左边，大于基数的数放到基数右边，并返回基数的位置
  {
    int p = left;
    int q = right;
    while(p < q) {
      while(p < q && arr[q] >= temp)  q--;
      arr[p] = arr[q];
      while(p < q && arr[p] < temp)  p++;
      arr[q] = arr[p];
    }
    index = q;
  }
  // 修改基数的位置
  arr[index] = temp;
  // 递归排序基数左右两边的序列
  quickSort(arr, left, index - 1);
  quickSort(arr, index + 1, right);
}

// 快速排序之交换
// 从左右两边向中间推进的时候，遇到不符合的数就两边交换值
void quickSort_swap(int arr[], int left, int right) {
  if(left >= right)  return;
  int temp = arr[left];
  int index = 0;
  {
    int p = left + 1;
    int q = right;
    while(p <= q) {
      while(p <= q && arr[p] < temp)  p++;
      while(p <= q && arr[q] > temp)  q--;
      if(p <= q) {
        swap(arr[p], arr[q]);
        // 交换值后两边各向中间推进一位
        p++;
        q--;
      }
    }
    index = q;
    // 修改基数的位置
    swap(arr[q], arr[left]);
  }
  quickSort_swap(arr, left, index-1);
  quickSort_swap(arr, index+1, right);
}

// 归并排序
// 递归将数组分为两个序列，有序合并这两个序列
// 最好：O(n * logn)
// 最坏：O(n * logn)
// 平均：O(n * logn)
void mergeSort(int arr[], int left, int right) {
  while(left >= right)  return;
  // 比起(left+right)/2，更推荐下面这种写法，可以避免数溢出
  int mid = (right - left) / 2 + left;
  // 递归将数组分为两个序列
  mergeSort(arr, left, mid);
  mergeSort(arr, mid+1, right);
  // 有序合并两个数组
  {
    int i = left, j = mid + 1;
    int temp[1000];
    int index = 0;
    while(i <= mid && j <= right) {
      if(arr[i] < arr[j]) {
        temp[index++] = arr[i++];
      }
      else {
        temp[index++] = arr[j++];
      }
    }
    while(i <= mid)  temp[index++] = arr[i++];
    while(j <= right)  temp[index++] = arr[j++];
    // 将有序合并后的数组修改回原数组
    for(int i=0; i<index; i++) {
      arr[left + i] = temp[i];
    }
  }
}

// 桶排序
// 将数组元素有序分配到n个桶里，最后再合并各个桶
// 最好：O(n)，每个数都在分布在一个桶里，这样就可以省略将数插入排序到桶里的时间(类似于计数排序以空间换时间)。
// 最坏：O(n2)，所有的数都分布在一个桶里
// 平均：O(n + k)，k表示桶的个数
void bucketSort(int arr[]) {
  // 桶的个数
  int num = 5;
  int _max = (*max_element(arr, arr+len));
  int _min = (*min_element(arr, arr+len));
  // 计算每个桶存放的数值范围，至少为1，
  int range = (_max - _min) / num;
  if(range < 1)  range = 1;
  // 创建二维数组，第一维表示第几个桶，第二维表示该桶里存放的数
  int res[100][1000]; 
  // 表示每个桶里元素的个数，因为c++不能直接获取到int数组的长度...
  int bucketSum[num];
  memset(bucketSum, 0, sizeof(bucketSum));
  for(int i=0; i<len; i++) {
    // 计算元素应该分布在哪个桶
    int index = floor((arr[i] - _min) / range);
    // 防止index越界，例如当[5,1,1,2,0,0]时index会出现5
    if(index >= num)  index = num - 1;
    // 插入排序，将元素有序插入到桶中
    int j = bucketSum[index] - 1;
    while(j >= 0 && arr[i] < res[index][j]) {
      res[index][j+1] = res[index][j];
      j--;
    }
    res[index][j+1] = arr[i];
    bucketSum[index]++;
  }
  // 修改回原数组
  int t = 0;
  for(int i=0; i<num; i++) {
    for(int j=0; j<bucketSum[i]; j++) {
      arr[t++] = res[i][j];
    }
  }
}

// 基数排序
// 使用十个桶0-9，把每个数从低位到高位根据位数放到相应的桶里，以此循环最大值的位数次。
// 只能排列正整数，因为遇到负号和小数点无法进行比较。
// 最好：O(n * k)，k表示最大值的位数
// 最坏：O(n * k)
// 平均：O(n * k)
void radixSort(int arr[]) {
  int _max = (*max_element(arr, arr+len));
  // 计算最大值的位数
  int maxDigits = 0; 
  while(_max) {
    maxDigits++;
    _max /= 10;
  }
  // 标记每个桶中存放的元素个数
  int bucketSum[10];
  memset(bucketSum, 0, sizeof(bucketSum));
  int div = 1; 
  // 第一维表示位数即0-9，第二维表示里面存放的值
  int res[10][1000];
  while(maxDigits--) {
    int digit;
    // 根据数组元素的位数将其放到相应的桶里
    for(int i=0; i<len; i++) {
      digit = arr[i] / div % 10;
      res[digit][bucketSum[digit]++] = arr[i];
    }
    // 把0-9桶里的数放回原数组后再进行下一个位数的计算
    int index = 0;
    for(int i=0; i<=9; i++) {
      for(int t=0; t<bucketSum[i]; t++) {
        arr[index++] = res[i][t];
      }
    }
    memset(bucketSum, 0, sizeof(bucketSum));
    div *= 10;
  }
}

// 计数排序
// 以数组元素值为键，出现次数为值存进一个临时数组，最后再遍历这个临时数组还原回原数组。
// 只能排序正整数
// 最好：O(n + k)，k是最大值和最小值的差
// 最坏：O(n + k)
// 平均：O(n + k)
void countingSort(int arr[]) {
  int res[10000];
  memset(res, 0, sizeof(res));
  int _max = (*max_element(arr, arr+len));
  int _min = (*min_element(arr, arr+len));
  for(int i=0; i<len; i++) {
    res[arr[i]]++;
  }
  int index = 0;
  for(int i=_min; i<=_max; i++) {
    while(res[i] > 0) {
      arr[index++] = i;
      res[i]--;
    }
  }
}

// 计数排序优化
// 把每一个数组元素都加上min的相反数，来避免特殊情况下的空间浪费。
// 可以把所开的空间大小从max+1降低为max-min+1。max和min分别为数组中的最大值和最小值
// 比如数组[103, 102, 101, 100]，普通的计数排序需要开一个长度为104的数组，而前面100个值都是undefined。使用这种优化方法后可以只开一个长度为4的数组。
void countingSort1(int arr[]) {
  int res[10000];
  memset(res, 0, sizeof(res));
  int _max = (*max_element(arr, arr+len));
  int _min = (*min_element(arr, arr+len));
  // 加上最小值的相反数来缩小数组范围
  int add = -_min;
  for(int i=0; i<len; i++) {
    int temp = arr[i];
    temp += add;
    res[temp]++;
  }
  int index = 0;
  for(int i=_min; i<=_max; i++) {
    int temp = res[i+add];
    while(temp > 0) {
      arr[index++] = i;
      temp--;
    }
  }
}

// 堆排序
// 根据数组建立一个堆（类似完全二叉树），每个结点的值都大于左右结点（最大堆，通常用于升序），或小于左右结点（最小堆，通常用于降序）。
// 对于升序排序，先构建最大堆后，交换堆顶元素（最大值）和堆底元素，每一次交换都能得到一个未有序序列的最大值。
// 重新调整最大堆，再交换堆顶元素和堆底元素。重复n-1次后就能得到一个升序的数组
// 最好：O(n * logn)，logn是调整最大堆所花的时间
// 最坏：O(n * logn)
// 平均：O(n * logn)

// 调整最大堆，使index的值大于左右节点
void adjustHeap(int arr[], int index, int size) {
  // 交换后可能会破坏堆结构，需要循环使得每一个父节点都大于左右结点
  while(true) {
    // 左节点
    int left = index * 2 + 1;
    // 右节点
    int right = index * 2 + 2;
    int _max = index;
    if(left < size && arr[_max] < arr[left])   _max = left;
    if(right < size && arr[_max] < arr[right]) _max = right;
    // 如果左右结点大于当前的结点则交换，并再循环一遍判断交换后的左右结点位置是否破坏了堆结构（比左右结点小了）
    if(_max != index) {
      swap(arr[_max], arr[index]);
      index = _max;
    }
    else {
      break;
    }
  }
}
// 建立最大堆
void buildHeap(int arr[]) {
  // 注意这里的头节点是从0开始的，所以最后一个非叶子结点是 parseInt(nums.length/2)-1。
  int start = floor(len / 2) -1;
  // 从最后一个非叶子结点开始调整，直至堆顶。
  for(int i=start; i>=0; i--) {
    adjustHeap(arr, i, len);
  }
}
void heapSort(int arr[]) {
  buildHeap(arr);
  // 循环n-1次，每次循环后交换堆顶元素和堆底元素并重新调整堆结构
  for(int i=len-1; i>0; i--) {
    swap(arr[0], arr[i]);
    adjustHeap(arr, 0, i);
  }
}

// 希尔排序
// 类似插入排序，只是向前移动的步数变成gap，插入排序每次都只是向前移动1。
// 通过某个增量gap，将整个序列分给若干组，从后往前进行组内成员的比较和交换，随后逐步缩小增量至1。
// 最好：O(n * logn)，步长不断二分
// 最坏：O(n * logn)
// 平均：O(n * logn)
void shellSort(int arr[]) {
  // 初始步数
  int gap = floor(len / 2);
  while(gap) {
    // 从第gap个元素开始遍历
    for(int i=gap; i<len; i++) {
      // 逐步其和前面其他的组成员进行比较和交换
      for(int j=i-gap; j>=0; j-=gap) {
        if(arr[j] > arr[j+gap]) {
          swap(arr[j], arr[j+gap]);
        }
        else {
          break;
        }
      }
    }
    gap = floor(gap / 2);
  }
}

int main() {
  while(1) {
    createArray(arr);
    cout<<endl;
    
    cout<<"冒泡排序"<<endl;
    bubbleSort(arr);
    // bubbleSort_twoWays(arr);
    print(arr);

    cout<<"选择排序"<<endl;
    selectSort(arr);
    print(arr);

    cout<<"插入排序"<<endl;
    insertSort(arr);
    print(arr);

    cout<<"快速排序"<<endl;
    quickSort(arr, 0, len-1);
    // quickSort_swap(arr, 0, len-1);
    print(arr);

    cout<<"归并排序"<<endl;
    mergeSort(arr, 0, len-1);
    print(arr);

    cout<<"桶排序"<<endl;
    bucketSort(arr);
    print(arr);

    cout<<"基数排序"<<endl;
    radixSort(arr);
    print(arr);

    cout<<"计数排序"<<endl;
    countingSort(arr);
    print(arr);

    cout<<"堆排序"<<endl;
    heapSort(arr);
    print(arr);

    cout<<"希尔排序"<<endl;
    shellSort(arr);
    print(arr);
  }
}