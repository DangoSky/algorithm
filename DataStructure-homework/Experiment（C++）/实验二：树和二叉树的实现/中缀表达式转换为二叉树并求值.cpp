#include <bits/stdc++.h>
using namespace std;
// 存放操作数栈的结构体
struct Node {
  int val;
  char op;
};
// 存放树结点的结构体
struct treeNode {
  int val;
  char op;
  treeNode *lchild;
  treeNode *rchild;
};
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
    if(str[i] >= 48 && str[i] <= 57) {
      temp = temp * 10 + str[i] - 48;
      mark = true;
    }
    /// 把操作数或操作符放入栈中
    else {
      // 存入操作数
      if(mark) {
        Node node;
        node.val = temp;
        node.op = NULL;
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
  node.op = NULL;
  st.push(node);
  // 把操作符栈剩下的操作符放入到操作数栈中
  while(!opStack.empty()) {
    Node node;
    node.op = opStack.top();;
    st.push(node);
    opStack.pop();
  }
  return st;
}

// 中缀表达式生成二叉树
treeNode buildTree(stack<Node> st) {
  // 把原先栈中的元素存入另一个栈中，这样栈底元素就成栈顶元素了
  stack<Node> newSt;
  while(!st.empty()) {
    Node top = st.top();
    newSt.push(top);
    st.pop();
  }
  // 将操作数作为操作符的左右子树，并不断合并操作数和操作符。最后树节点栈中只剩下一个二叉树的根节点
  stack<treeNode> treeStack;
  treeNode node;
  while(!newSt.empty()) {
    Node top = newSt.top();
    // 遇到操作数直接入树节点栈
    if(top.op == NULL) {
      treeNode treenode;
      treenode.val = top.val;
      treenode.op = NULL;
      treeStack.push(treenode);
      newSt.pop();
    }
    // 遇到操作符则先从树节点栈中取出两个操作数当做左右子树后再入树节点栈
    else {
      treeNode treenode1 = treeStack.top();
      treeStack.pop(); 
      treeNode treenode2 = treeStack.top();
      treeStack.pop();
      treeNode treenode;
      treenode.op = top.op;
      treenode.rchild = &treenode1;
      treenode.lchild = &treenode2;
      treeStack.push(treenode);
      newSt.pop();
    }
  }
  // while(!treeStack.empty()) {
  //   treeNode t = treeStack.top();
  //   cout<<t.op<<endl;
  //   treeStack.pop();
  // }
  return treeStack.top();
}

// 后序遍历求值
int computed(treeNode head) {
  cout<<"computed"<<endl;
  if(&head == NULL) {
    // return head.val;
    return NULL;
  }
  char op = head.op;
  int left = computed(*head.lchild);
  int right = computed(*head.rchild);
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
}
int main() {
  string str;
  while(cin>>str) {
    stack<Node> stack = turn(str);
    treeNode head = buildTree(stack);
    int ans = computed(head);
    cout<<"最终计算结果为： "<<ans<<endl;
    // while(!stack.empty()) {
    //   Node t = stack.top();
    //   stack.pop();
    //   if(t.op == NULL) {
    //     cout<<t.val<<endl;
    //   }
    //   else {
    //     cout<<char(t.op)<<endl;
    //   }
    // }
  }
}