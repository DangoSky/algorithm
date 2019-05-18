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

// 选择排序
void selectSort(int arr[]) {
  for(int i=0; i<len; i++) {
    for(int j=i+1; j<len; j++) {
      if(arr[i] > arr[j]) {
        swap(arr[i], arr[j]);
      }
    }
  }
}

// 冒泡排序
void bubbleSort(int arr[]) {
  for(int i=len-1; i>0; i--) {
    for(int j=0; j<i; j++) {
      if(arr[j] > arr[j+1]) {
        swap(arr[j], arr[j+1]);
      }
    }
  }
}

// 快速排序之填坑
void quickSort(int arr[], int left, int right) {
  if(left >= right)  return;
  int temp = arr[left]; 
  int index = 0;
  // 寻找基数的位置
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
  arr[index] = temp;
  quickSort(arr, left, index - 1);
  quickSort(arr, index + 1, right);
}

// 快速排序之交换
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
        p++;
        q--;
      }
    }
    index = q;
    swap(arr[q], arr[left]);
  }
  quickSort_swap(arr, left, index-1);
  quickSort_swap(arr, index+1, right);
}

int main() {
  while(1) {
    createArray(arr);
    // selectSort(arr);
    // bubbleSort(arr);
    quickSort_swap(arr, 0, len-1);
    print(arr);
  }
}