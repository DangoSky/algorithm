#include <bits/stdc++.h>
using namespace std;
// 计算next数组
void getNext(string str, int next[]) {
  int i = 0, j = -1;
  int len = str.length();
  next[0] = -1;
  while(i < len - 1) {
    if(j == -1 || str[i] == str[j]) {
      i++;
      j++;
      next[i] = j;
    }
    else {
      j = next[j];
    }
  }
}
int kmp(string str, string s, int next[]) {
  getNext(s, next);
  int i = 0, j = 0;
  int len1 = str.length(), len2 = s.length();
  while(i < len1 && j < len2) {
    if(j == -1 || str[i] == s[j]) {
      i++;
      j++;
    }
    else {
      j = next[j];
    }
  }
  if(j == len2)  return i - j;
  else  return -1;
}

int main() {
  while(1) {
    string str = "";
    string s = "";
    cout<<"请输入病毒的DNA序列"<<endl;
    cin>>s;
    cout<<"请输入患者的DNA序列"<<endl;
    cin>>str;
    int next[1000];
    string doubleS = s + s;
    int res; 
    for(int i=0; i<s.length(); i++) {
      string newS = doubleS.substr(i, s.length());
      res = kmp(str, newS, next);
      if(res != -1)  break;
    }
    if(res == -1) {
      cout<<"NO"<<endl;
    }
    else {
      cout<<"YES"<<endl;
    }
    cout<<endl;
  }
}