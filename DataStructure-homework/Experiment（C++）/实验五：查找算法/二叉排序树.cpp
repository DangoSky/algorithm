#include <bits/stdc++.h>
using namespace std;
int len;  // 待排序数列的长度
struct BSTNode {
  int val;
  struct BSTNode *lchild;
  struct BSTNode *rchild;
};

// 插入二叉排序树
void insertBST(BSTNode *&tree, int n) {
  if(tree == NULL) {
    BSTNode *node = new BSTNode;
    node->val = n;
    node->lchild = node->rchild = NULL;
    tree = node;
  }
  else if(n < tree->val) {
    insertBST(tree->lchild, n);
  }
  else if(n >= tree->val) {
    insertBST(tree->rchild, n);
  }
}

// 使用随机数生成待排序序列
void createArray(BSTNode *&tree) {
  int a, b;
  cout<<"请输入要生成的数的最小值"<<endl;
  cin>>a;
  cout<<"请输入要生成的数的最大值"<<endl;
  cin>>b;
  int n = len;
  cout<<"随机生成的序列为"<<endl;
  while(n--) {
    int temp = (rand() % (b - a + 1)) + a;
    cout<<temp<<" ";
    insertBST(tree, temp);
  }
}

// 中序遍历升序排列
void inorderTraversal(BSTNode *&t) {
  if(t == NULL)  return;
  inorderTraversal(t->lchild);
  cout<<t->val<<" ";
  inorderTraversal(t->rchild);
}

// 降序排列
void descendingOrder(BSTNode *&t) {
  if(t == NULL)  return;
  descendingOrder(t->rchild);
  cout<<t->val<<" ";
  descendingOrder(t->lchild);
}

int main() {
  while(1) {
    cout<<"请输入要排序序列的长度"<<endl;
    cin>>len;
    BSTNode *tree = NULL;
    createArray(tree);
    cout<<endl;
    cout<<"升序序列为："<<endl;
    inorderTraversal(tree);
    cout<<endl;
    cout<<"降序序列为："<<endl;
    descendingOrder(tree);
    cout<<endl;
  }
}

