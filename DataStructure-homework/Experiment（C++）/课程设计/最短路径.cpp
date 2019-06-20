#include <bits/stdc++.h>
using namespace std;
const int INF = 100000000;
const int MAX = 500;
int n, m;                    // 总人数，有关系的人的对数
int dis[MAX];                // 人与人的距离
int bothDis[MAX][MAX];      // 两个有联系的人之间的距离
int through[MAX];           // 到达目标经过的联络人数
bool vis[MAX] = {false};   // 标记是否已经访问过
vector<int> path;         // 存放一次联系中经过的联络人
// 存放每个人的地理坐标
struct People {
  int x;
  int y;
} people[MAX];

// 输入相关的数据并初始化
void input() {
  cout<<"请输入总人数"<<endl;
  cin>>n;
  cout<<"请分别输入编号为0-"<<n-1<<"的人所在的横纵坐标"<<endl;
  for(int i=0; i<n; i++) {
    cin>>people[i].x>>people[i].y;
  }
  fill(bothDis[0], bothDis[0] + MAX * MAX, INF);
  cout<<"请输入有关系的人的对数"<<endl;
  cin>>m;
  cout<<"请输入两个有联系的人的编号"<<endl;
  for(int i=0; i<m; i++) {
    int a, b;
    cin>>a>>b;
    bothDis[a][b] = bothDis[b][a] = sqrt(pow(people[a].x - people[b].x, 2) + pow(people[a].y - people[b].y, 2));
  }
}

// 迪杰斯特拉算法
void Dijkstra(int start) {
  // 初始化值
  fill(dis, dis + MAX, INF);  // 起点和其他所有点初始化为无穷远，表示不连通
  fill(vis, vis + MAX, false);
  fill(through, through + MAX, -1);  // 两个人之间经过的联络人数初始化为-1，表示互不联系。当两个人相互直接联系时，through为0。
  dis[start] = 0;  // 起点只和自己相连通
  for(int i=0; i<n; i++) {
    int u = -1, MIN = INF;
    // 先找到距离起点最近的一个点
    for(int j=0; j<n; j++) {
      if(vis[j] == false && dis[j] < MIN) {
        u = j;
        MIN = dis[j];
      }
    }
    // 标记为已读
    vis[u] = true;
    // 没有找到说明剩下的点和起点都不连通
    if(u == -1)  return;
    // 以u为中间点，判断从start直接到t，和从start经过u再到t哪个的路径更短
    for(int t=0; t<n; t++) {
      // t未访问 && 中间点u和t连通 && 以u为中介可以时dis[t]更短
      if(vis[t] == false && bothDis[u][t] != INF && dis[u] + bothDis[u][t] < dis[t]) {
        dis[t] = dis[u] + bothDis[u][t];
        through[t] = through[u] + 1;
      }
    }
  }
}

// 深度递归搜索和start相关联的其他所有人
// 使用vector来装路径。后进先出
void DFS(int start, int end) {
  path.push_back(start);
  // 找到了目标，输出关联两者时经过的所有联络人
  if(start == end) {
    for(vector<int>::iterator it=path.begin(); it!=path.end(); it++) {
      cout<<*it<<" ";
    }
    cout<<endl;
    path.pop_back();
    return;
  }
  for(int i=0; i<n; i++) {
    // 对于已经在path中的结点不重复搜索
    int mark = find(path.begin(), path.end(), i) == path.end();
    if(mark) {
      // start 得和 i 有联系才递归搜索
      if(bothDis[start][i] != INF) {
        DFS(i, end);
      }
    }
  }
  path.pop_back();
}

// 功能实现
// 1. 计算和路人甲距离最近的人
// 2. 搜索两个人之间的所有路径
// 3. 给出搜索范围寻找可以联络到的人
// 4. 寻找只需联络一次就能建立联系的人
int main() {
  // 初始化并输入测试数据
  input();
  while(1) {
    // 1. 计算和路人甲距离最近的人
    {
      cout<<"请输入任意一个人的编号用来计算和他距离最近的人"<<endl;
      int one;
      cin>>one;
      Dijkstra(one);
      int minDis = INF;
      // 先找出和有联系的人之间的最短距离
      for(int i=0; i<n; i++) {
        if(i != one && dis[i] < minDis) {
          minDis = dis[i];
        }
      }
      if(minDis == INF) {
        cout<<"编号为"<<one<<"的人和其他人都没有联系"<<endl;
      }
      else {
        cout<<"和编号为"<<one<<"的人距离最近的人的编号是: ";
        for(int i=0; i<n; i++) {
          if(dis[i] == minDis) {
            cout<<i<<" ";
          }
        }
        cout<<endl;
        cout<<"最短的距离是"<<minDis<<endl;
      }
      cout<<endl;

    }

    // 2. 搜索两个有联系的人之间的所有路径
    {
      cout<<"请分别输入要搜索的两个人的编号用来搜索它们之间的路径"<<endl;
      int a, b;
      Dijkstra(a);
      cin>>a>>b;
      cout<<a<<"和"<<b<<"之间的路径有"<<endl;
      DFS(a, b);
      cout<<"中间经过最少的联络人数为"<<through[b]<<endl;
      cout<<endl;
    }

    // 3. 给出搜索范围寻找可以联络到的人
    {
      cout<<"请分别输入任意一个人的编号和要搜索的范围"<<endl;
      int one;
      cin>>one;
      int range;
      cin>>range;
      Dijkstra(one);
      cout<<"和"<<one<<"距离不超过"<<range<<"的人有"<<endl;
      for(int i=0; i<n; i++) {
        if(i != one && dis[i] <= range) {
          cout<<i<<" ";
        }
      }
      cout<<endl<<endl;
    }

    // 4. 寻找只需联络一次就能建立联系的人
    {
      cout<<"请输入任意一个人的编号用来寻找和他只需要一个联络人就能联系到的人"<<endl;
      int one;
      cin>>one;
      Dijkstra(one);
      cout<<"和"<<one<<"建立联系只需要经过一个联络人的有"<<endl;
      for(int i=0; i<n; i++) {
        if(through[i] == 1) {
          cout<<i<<" ";
        }
      }
      cout<<endl<<endl;
    }
  }
}