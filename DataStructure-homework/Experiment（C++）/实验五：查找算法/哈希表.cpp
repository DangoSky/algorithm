#include <bits/stdc++.h>
using namespace std;
int len;   // 待查找序列的长度

// 创建哈希表
void createHash(int arr[], int hash[]) {
  for(int i=0; i<len; i++) {
    hash[i] = NULL;
  }
  for(int i=0; i<len; i++) {
    int index = arr[i] % len;
    if(hash[index] == NULL) {
      hash[index] = arr[i];
      continue;
    }
    int val = arr[i], j;
    do {
      val = val + 1;
      j = val % len;
    } while(hash[j] != NULL);
    hash[j] = arr[i];
  }
}

// 在哈希表中查找值
bool search(int hash[], int val) {
  int val1 = val;
  int index = val % len;
  int sum = 0;
  while(sum < len) {
    if(hash[index] == val) {
      cout<<"要查找的值 "<<val<<" 存在哈希表中"<<endl;
      return true;
    }
    sum++;
    val1++;
    index = val1 % len;
  }
  cout<<"要查找的值 "<<val<<" 不存在哈希表中"<<endl;
  return false;
}

int main() {
  while(1) {
    cout<<"请输入待查找序列的长度"<<endl;
    cin>>len;
    int arr[len];
    cout<<"请输入待查找序列"<<endl;
    for(int i=0; i<len; i++) {
      cin>>arr[i];
    }
    int hash[len];
    createHash(arr, hash);
    for(int i=0; i<len; i++) {
      cout<<hash[i]<<endl;
    }
    int temp;
    cout<<"请输入要查找的值"<<endl;
    cin>>temp;
    bool result = search(hash, temp);

    cout<<"请输入要查找的值"<<endl;
    cin>>temp;
    result = search(hash, temp);

    cout<<"请输入要查找的值"<<endl;
    cin>>temp;
    result = search(hash, temp);
  }
}