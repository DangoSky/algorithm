#include <stack>
#include <queue>
#include <string>
#include <iostream>
#include <algorithm>
#include <functional>
using namespace std;

// 存放操作数栈的结构体
struct Node {
  int val = 0;  // C++11初始化语法
  char op = '\0';
};
// 存放树结点的结构体
struct TreeNode {
  int val = 0;
  char op = '\0';
  TreeNode *lchild = nullptr;
  TreeNode *rchild = nullptr;
};
using Tree = TreeNode*;

// 求二叉树的深度
int TreeDepth(const Tree & tree) {
  if (tree) {
    return max(TreeDepth(tree->lchild), TreeDepth(tree->rchild)) + 1;
  }
  return 0;
}
 
// 打印二叉树
void TreePrint(const Tree & tree) {
  int tree_depth = TreeDepth(tree);  // 待打印二叉树的深度
  // 输出space_count个空格的函数
  function<void(int)> print_space = [](int space_count) {
    while (space_count--) cout << ' ';
  };  
  queue<TreeNode *> que;
  que.push(tree);  // 树根结点入队
  // 按层打印二叉树
  for (int current_depth = 1; current_depth <= tree_depth; ++current_depth) {
    int next_level_node_count = 0;  // 下一层非空结点的个数
    int space_count = (1 << (tree_depth - current_depth)) - 1;  // 结点字符前后空格的数量
    queue<TreeNode *> nxt;  // 下一层待打印的结点
    while (!que.empty())  // 当本层还有待打印的结点
    {
      print_space(space_count);  // 打印前导空格
      TreeNode * front = que.front();  // 取结点
      if (front != nullptr) {  // 如果结点不是空结点
        front->op == '\0' ? cout << front->val : cout << front->op;  // 打印结点
        nxt.push(front->lchild);  // 将左右孩子结点加入队列
        nxt.push(front->rchild);
        next_level_node_count += int(front->lchild != nullptr);  // 计算下一层待打印的结点的个数
        next_level_node_count += int(front->rchild != nullptr);
      }
      else {  // 如果结点是空结点
        cout << '#';  // 打印空结点符号
        nxt.push(nullptr);  // 放入表示空结点的值
        nxt.push(nullptr);
      }
      que.pop();  // 弹出当前结点
      que.empty() ? print_space(0) : print_space(space_count + 1);  // 打印后导空格
    }
    cout << '\n';  // 换行
    que = nxt;
    if (next_level_node_count == 0) break;
  }
}
 
// 中缀表达式转后缀表达式
stack<Node> turn(string str) {
  // 存放操作数的栈，因为既然操作数也有操作符，所以得用一个结构体而不能用int
  stack<Node> st;
  // 存放操作符的栈
  stack<char> opStack; 
  int temp = 0;
  bool mark = false;
  // 格式化输入的字符串，把操作数和操作符存入到栈中
  for(int i=0; i<str.size(); i++)  {
    // 格式化数字
    if(str[i] >= '0' && str[i] <= '9') {
      temp = temp * 10 + str[i] - '0';
      mark = true;
    }
    // 把操作数或操作符放入栈中
    else {
      // 存入操作数
      if(mark) {
        Node node;
        node.val = temp;
        st.push(node);
        mark = false;
        temp = 0;
      }
      // 存入操作符（以 ASCII 码的形式）
      // 当前操作符栈为空则直接存入当前操作符
      if(opStack.empty()) {
        opStack.push(str[i]);
        continue;
      }
      int top = opStack.top();
      // 当前操作符是乘除
      if(str[i] == '*' || str[i] == '/') {
        // 当前操作符和栈顶操作符是同级的，则要先取出栈顶元素加入到操作数栈后，再把当前操作符存入操作符栈
        if(top == '*' || top == '/') {
          Node node;
          node.op = top;
          st.push(node);
          opStack.pop();
          opStack.push(str[i]);
        }
        // 当前操作符比栈顶操作符高级，则直接存入操作符栈
        else {
          opStack.push(str[i]);
        }
      }
      // 当前操作符是加减
      else if(str[i] == '+' || str[i] == '-') {
        // 当前操作符和栈顶操作符是同级的，则要先取出栈顶元素加入到操作数栈后，再把当前操作符存入操作符栈
        if(top == '+' || top == '-') {
          Node node;
          node.op = top;
          st.push(node);
          opStack.pop();
          opStack.push(str[i]);
        }
        // 当前操作符比栈顶操作符低级，先取出栈顶操作符放入操作数栈，再判断新的栈顶元素。若同级的话则先把新的栈顶操作符放入操作数栈，再把当前操作符放入操作符栈
        else if(top == '*' || top == '/') {
          Node node;
          node.op = top;
          st.push(node);
          opStack.pop();
          // 栈空时直接将但当前操作符放入操作符栈
          if (opStack.empty()) {
            opStack.push(str[i]);
            continue;
          }
          int newTop = opStack.top();
          if(newTop == '+' || newTop == '-') {
            Node node1;
            node1.op = newTop;
            st.push(node1);
            opStack.pop();
          }
          opStack.push(str[i]);
        }
      }
    }
  }
  // 别落了最后还有一个数字
  Node node;
  node.val = temp;
  node.op = '\0';
  st.push(node);
  // 把操作符栈剩下的操作符放入到操作数栈中
  while(!opStack.empty()) {
    Node node;
    node.op = opStack.top();;
    st.push(node);
    opStack.pop();
  }
  // {  // 输出后缀表达式
  //   cout<<"输出后缀表达式："<<endl;
  //   auto copy(st);
  //   stack<Node> rev;
  //   while(!copy.empty()) {
  //     Node tem  = copy.top();
  //     rev.push(tem);
  //     copy.pop();
  //   }
  //   while (!rev.empty()) {
  //     Node tem = rev.top();
  //     tem.op == '\0' ? cout << tem.val : cout << tem.op;
  //     cout << ' '; 
  //     rev.pop();
  //   }
  //   cout << endl;
  // }
  return st;
}
 
// 后缀表达式生成二叉树
void buildTree(stack<Node> st, TreeNode*& head) {
  // 把原先栈中的元素存入另一个栈中，这样栈底元素就成栈顶元素了
  stack<Node> newSt;
  while(!st.empty()) {
    Node top = st.top();
    newSt.push(top);
    st.pop();
  }
  // 将操作数作为操作符的左右子树，并不断合并操作数和操作符。最后树节点栈中只剩下一个二叉树的根节点  
  stack<TreeNode*> treeStack;
  TreeNode* node;
  while(!newSt.empty()) {
    Node top = newSt.top();
    // 遇到操作数直接入树节点栈
    if(top.op == '\0') {
      TreeNode* treenode = new TreeNode();
      treenode->val = top.val;
      treeStack.push(treenode);
    }
    // 遇到操作符则先从树节点栈中取出两个操作数当做左右子树后再入树节点栈
    else {
      TreeNode* treenode1 = treeStack.top();
      treeStack.pop(); 
      TreeNode* treenode2 = treeStack.top();
      treeStack.pop();
      TreeNode* treenode = new TreeNode();
      treenode->op = top.op;
      treenode->rchild = treenode1;
      treenode->lchild = treenode2;
      treeStack.push(treenode);
    }
    TreeNode* tem = treeStack.top();
    newSt.pop();
  }
  head = treeStack.top();
}
 
// 后序遍历求值
int computed(TreeNode* head) {
  if(head->lchild == NULL || head->rchild == NULL) {
    return head->val;
  }
  char op = head->op;
  int left = computed(head->lchild);
  int right = computed(head->rchild);
  if(op == '+') {
    return left + right;
  }
  else if(op == '-') {
    return left - right;
  }
  else if(op == '*') {
    return left * right;
  }
  else if(op == '/') {
    return left / right;
  }
  return 0;
}
 
int main() {
  string str;
  while(cin>>str) {
    stack<Node> stack = turn(str);
    
    TreeNode* head;
    buildTree(stack, head);
    
    cout << "打印表达式树：" << endl;
    TreePrint(head);
 
    cout << "计算结果：" << endl;
    cout << computed(head) << endl;
  }
}