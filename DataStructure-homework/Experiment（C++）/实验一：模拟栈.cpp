#include <bits/stdc++.h>
using namespace std;
struct Stack {
  int *top;   // 栈顶指针
  int *base;  // 栈尾指针
  int size;   // 栈的大小
};
/* 
  api支持：
  empty(Stack S): 判断栈是否为空
  push(Stack &S, int el): 入栈
  pop(Stack &S): 删除栈顶元素并返回该值
  getTop(Stack S): 获取栈顶元素 
  judge(string s): 对输入的字符串进行判断是否是有效的括号
*/
// 判断栈是否为空
bool empty(Stack S) {
  if(S.top == S.base) {
    return true;
  }
  else {
    return false;
  }
}
// 入栈
void push(Stack &S, int el) {
  if(S.top - S.base == S.size) {
    cout<<"添加失败，已经达到栈最大容量"<<endl;
    return;
  }
  *S.top++ = el;
}
// 出栈
int pop(Stack &S) {
  if(!empty(S)) {
    return *--S.top;
  }
  cout<<"添加失败，栈为空"<<endl;
}
// 获取栈顶元素
int getTop(Stack S) {
  if(!empty(S)) {
    return *(S.top-1);
  }
  cout<<"获取失败，栈为空"<<endl;
}
// 判断括号是否匹配
bool judge(string s) {
  map<char, char> m;
  m['('] = ')';
  m['['] = ']';
  m['{'] = '}';
  int len = s.size();
  Stack stackLink;
  stackLink.base = new int[len];
  stackLink.top = stackLink.base;
  stackLink.size = len;
  bool ans = true;
  for(int i=0; i<len; i++) {
    if(s[i] == '(' || s[i] == '[' || s[i] == '{') {
      push(stackLink, s[i]);
      continue;
    }
    else if(empty(stackLink) || m[char(getTop(stackLink))] != s[i]) {
      ans = false;
      break;
    }
    pop(stackLink);
  }
  if(empty(stackLink) == true && ans== true) {
    cout<<"输入的字符串括号匹配"<<endl;
    return true;
  }
  else {
    cout<<"输入的字符串括号不匹配"<<endl;
    return false;
  }
}
int main() {
  string s;
  cout<<"请输入要进行判断的字符串"<<endl;
  while(cin>>s) {
    judge(s);
  }
  system("pause");
}