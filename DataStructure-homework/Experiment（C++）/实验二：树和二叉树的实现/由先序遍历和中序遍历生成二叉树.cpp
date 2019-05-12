#include <bits/stdc++.h>
using namespace std;
struct Node {
  char data;
  int layer;
  Node *lchild;
  Node *rchild;
};
// 建立二叉树
Node* create(int preL, int preR, int inL, int inR, string preorder, string inorder) {
  // 先序序列或中序序列的长度小于等于0时则返回
  if(preL > preR || inL > inR) {
    return NULL;
  }
  Node* root = new Node;
  root->data = preorder[preL];
  // 记录中序序列中根节点的索引
  int rootIndex;
  for(int i=inL; i<=inR; i++) {
    if(inorder[i] == preorder[preL]) {
      rootIndex = i;
      break;
    }
  }
  // 左子树的结点个数
  int lchildNum = rootIndex - inL;
  // 递归建立左子树
  root->lchild = create(preL+1, preL+lchildNum, inL, rootIndex-1, preorder, inorder);
  // 递归建立右子树
  root->rchild = create(preL+lchildNum+1, preR, rootIndex+1, inR, preorder, inorder);
  return root;
}
// 以层序序列打印二叉树
string print(Node* root) {
  queue<Node*> q;
  q.push(root);
  root->layer = 1;
  string str = "";
  while(!q.empty()) {
    // 取队首元素打印并出队
    Node* now = q.front();
    q.pop();
    str += now->data;
    str += "->";
    // 如果左子树非空则入队
    if(now->lchild != NULL) {
      q.push(now->lchild);
      // 结点的层次加一
      now->lchild->layer = now->layer + 1;
    }
    // 如果右子树非空则入队
    if(now->rchild != NULL) {
      q.push(now->rchild);
      now->rchild->layer = now->layer + 1;
    }
  }
  return str.substr(0, str.size()-2);
}
int main() {
  while(1) {
    string preorder = ""; 
    string inorder = "";
    cout<<"请输入先序遍历的结果字符串:"<<endl;
    cin>>preorder;
    cout<<"请输入中序遍历的结果字符串:"<<endl;
    cin>>inorder;
    Node *ans = create(0, preorder.size()-1, 0, inorder.size()-1, preorder, inorder);
    cout<<"打印该二叉树为："<<endl;
    cout<<print(ans)<<endl;
  }
}