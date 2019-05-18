#include <iostream>
#include <bits/stdc++.h>
using namespace std;
// 图的存储结构
struct Graph {
  int v[500];
  int e[500][500];
  int vsum, esum;     // 结点总数和边树 
  bool visited[500];  // 标记该结点是否已被访问 
};

// 创建图
void createGraph(Graph &graph) {
  cout<<"请输入图的节点总数和边数"<<endl;
  cin>>graph.vsum>>graph.esum;
  cout<<"请输入图中节点的信息"<<endl;
  for(int i=0; i<graph.vsum; i++) {
    cin>>graph.v[i];
  }
  // 先把所有节点之间都设置为不连通和未访问
  for(int i=0; i<graph.vsum; i++) { 
    graph.visited[graph.v[i]] = false;
    for(int j=0; j<graph.vsum; j++) {
      graph.e[graph.v[i]][graph.v[j]] = -1;
    }
  }
  cout<<"请输入图中各边的两个顶点和边长"<<endl;
  for(int i=0; i<graph.esum; i++) {
    int v1, v2, w;
    cin>>v1>>v2>>w;
    graph.e[v1][v2] = w;
    graph.e[v2][v1] = w;
  }
}

// 打印邻接矩阵
void print(Graph graph) {
 cout<<"输出图中各个结点的信息和连通的边"<<endl;
  for(int i=0; i<graph.vsum; i++) {
    for(int j=0; j<graph.vsum; j++) {
      cout<<graph.v[i]<<" "<<graph.v[j]<<" "<<graph.e[graph.v[i]][graph.v[j]]<<endl;
    }
    cout<<endl;
  }
}

// 找到编号为v的顶点的第一个邻接顶点
int find(Graph graph) {
  cout<<"请输入要查找的顶点信息"<<endl;
  int v;
  cin>>v;
  for(int i=0; i<graph.vsum; i++) {
    // 先定位到 v 顶点 
    if(graph.v[i] == v) {
      for(int j=0; j<graph.vsum; j++) {
        int temp = graph.v[j];
        if(graph.e[v][temp] != -1) {
          cout<<"和顶点 "<<v<<" 邻接的第一个顶点为 "<<temp<<endl;
          return temp;
        }
      }
    }
  }
  return 0;
}

// 设w是v的邻接顶点, 找到v的排在w后的下一个邻接顶点
int findNext(Graph graph) {
  cout<<"请输入顶点V和它的邻接顶点W"<<endl;
  int w,v;
  cin>>v>>w;
  // 标记是否已经找到了 W 顶点
  bool mark = false;
  for(int i=0; i<graph.vsum; i++) {
    // 先定位到 v 顶点 
    if(graph.v[i] == v) {
      for(int j=0; j<graph.vsum; j++) {
        int temp = graph.v[j];
        if(temp == w) {
          if(graph.e[v][w] == -1)  {
            cout<<"顶点 v 和顶点 w 不连通"<<endl;
            return 0;
          }
          mark = true;
        }
        else if(graph.e[v][temp] != -1 && mark == true) {
          cout<<"顶点 "<<v<<" 的排在 "<<w<<" 后的下一个邻接顶点是 "<<temp<<endl;
          return temp;
        }
      }
    }
  }
  cout<<"没有找到符合条件的顶点"<<endl;
  return 0;
}

// 从顶点start开始搜索，遍历结果存储在str中
void DFS(Graph &graph, int start, string &str) {
  str += (start + 48);
  str += "->";
  graph.visited[start] = true;
  for(int i=0; i<graph.vsum; i++) {
    int temp = graph.v[i];
    if(graph.visited[temp] == false && graph.e[start][temp] != -1) {
      DFS(graph, temp, str);
    }
  }
}

// 对连通图从顶点v开始进行广度优先访问
void BFS(Graph &graph, int start, string &str) {
  queue<int> q;
  q.push(start);
  graph.visited[start] = true;
  while(!q.empty()) {
    int top = q.front();
    q.pop();
    str += (top + 48);
    str += "->";
    for(int i=0; i<graph.vsum; i++) {
      int temp = graph.v[i];
      if(graph.e[top][temp] != -1 && graph.visited[temp] == false) {
        q.push(temp);
        graph.visited[temp] = true;
      }
    }
  }
}

// 选择DFS或BFS对连通图从顶点v开始进行遍历
void traversal(Graph &graph) {
  for(int i=0; i<graph.vsum; i++) {
    graph.visited[graph.v[i]] = false;
  }
  cout<<"请输入DFS或BFS选择相应的方式进行遍历"<<endl;
  string method;
  cin>>method;
  cout<<"请输入要开始遍历的顶点V"<<endl;
  int start;
  cin>>start;
  string str = "";
  if(method == "DFS") {
    DFS(graph, start, str);
    cout<<"深度遍历顶点 ";
  }
  else if(method == "BFS") {
    BFS(graph, start, str);
    cout<<"广度遍历顶点 ";    
  }
  else {
    cout<<"请选择有效的遍历方式"<<endl;
    return;
  }
  str = str.substr(0, str.length()-2);
  cout<<start<<" 的结果为"<<endl;
  cout<<str<<endl;
}

int main() {
  while(1) {
    Graph graph;
    createGraph(graph);
    // print(graph);
    find(graph);
    findNext(graph);
    traversal(graph);
    traversal(graph);
  }
}