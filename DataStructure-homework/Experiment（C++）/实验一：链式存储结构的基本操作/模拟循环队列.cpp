#include <bits/stdc++.h>
using namespace std;
// 队列的最大长度
int maxSize;
struct Queue {
  int front;
  int rear;
  int *data;
};
/* 
  api支持：
  unshift(Queue &q, int el): 入队
  shift(Queue &q): 出队并返回该元素
  length(Queue q): 获取队列的长度
  getHead(Queue q): 获取队头元素
  print(Queue q): 打印队列
 */
// 获取队列的长度
int length(Queue q) {
  return (q.rear - q.front + maxSize) % maxSize;
}
// 入队
void unshift(Queue &q, int el) {
  if((q.rear + 1) % maxSize == q.front) {
    cout<<"添加失败，队列已达到最大长度"<<endl;
    return;
  }
  q.data[q.rear] = el;
  q.rear = (q.rear + 1) % maxSize;
}
// 出队，并返回该元素
int shift(Queue &q) {
  if(length(q) != 0) {
    int ans = q.data[q.front];
    q.front = (q.front + 1) % maxSize;
    return ans;
  }
  cout<<"删除失败，当前队列为空"<<endl;
}
// 获取队头元素
int getHead(Queue q) {
  if(length(q) != 0) {
    return q.data[q.front];
  }
  cout<<"获取失败，当前队列为空"<<endl;
}
// 打印队列
string print(Queue q) {
  string s = "";
  while(length(q) != 0) {
    char tem[100];
		itoa(getHead(q), tem, 10);
    s += tem;
    q.front = (q.front + 1) % maxSize;
    if(length(q) != 0) {
      s += "->";
    }
  }
  return s;
}
int main() {
  cout<<"请输入队列的最大长度"<<endl;
  cin>>maxSize;
  Queue queue;
  queue.data = new int(maxSize);
  queue.front = queue.rear = 0;
  int num;
  cout<<"请输入要添加到队列中的元素，按 Ctrl + Z 结束"<<endl;
  while(cin>>num) {
    unshift(queue, num);
    cout<<print(queue)<<endl;
  }
  system("pause");
} 