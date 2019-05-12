#include <bits/stdc++.h>
using namespace std;
struct Node {
  int data;
  struct Node *next;
};
/* 
	api支持：
	print(Node *L): 打印链表每一个节点的数据域
	add(Node *L): 按升序的方式在链表中插入一个节点
	remove(Node *L): 根据输入的索引删除某一个节点
	reverse(Node *L): 翻转链表
	concat(Node *L1, Node *L2): 按升序的方式合并两个链表，并返回一个新的链表
*/
// 用来标记翻转链表的次数
int reverseNum = 0;
// 打印链表
void print(Node *L) {	
	Node *cur = L;
	string str = "";
	while(cur) {	
		char tem[100];
		itoa(cur->data, tem, 10);
		str += tem;
		cur = cur->next;
		if(cur != NULL) {
			str += "->";
		}		
	}
	cout<<str<<endl;
	return;
} 
// 按升序插入节点
void add(Node *L) {
	Node *newNode = new Node;
	int num;
	cout<<"输入要插入的节点的数据值"<<endl;
	cin>>num;
	newNode->data = num;
	newNode->next = NULL;
	Node *cur = L;
	L->data++;
	if(reverseNum % 2) {
		cout<<"warn: 翻转链表没有再次翻转，当前插入节点操作出错。"<<endl;
		cout<<"当前链表为: ";
		print(L);
	}
	do {
		if(cur->next == NULL || cur->next->data >= num) {
			newNode->next = cur->next;
			cur->next = newNode;
			break;
		}
		else {
			cur = cur->next;
		}
	}while(cur);
}
// 根据索引删除节点
void remove(Node *L) {
	int targetIndex;
	cout<<"输入要删除的节点的索引"<<endl;
	cin>>targetIndex;
	Node *cur = L;
	int index = 1;
	while(cur) {
		if(index == targetIndex) {
			cur->next = cur->next->next;
			L->data--;
			return;
		}
		cur = cur->next;
		index++;
	}
	cout<<"操作失败！要删除的节点不存在"<<endl;
} 
// 翻转链表
void reverse(Node *L) {
	reverseNum++;
	int arr[1000];
	int index = 0;
	Node *cur = L->next;
	while(cur) {
		arr[index++] = cur->data;
		cur = cur->next;
	}
	Node *cur1 = L->next;
	int j = L->data - 1;
	while(cur1) {
		cur1->data = arr[j--];
		cur1 = cur1->next;
	}
}
// 有序合并两个链表 
Node concat(Node *L1, Node *L2) {
	Node *cur1 = L1->next;
	Node *cur2 = L2->next;
	Node *ans = new Node;
	ans->data = L1->data + L2->data;
	ans->next = NULL;
	Node *cur = ans;
	while(cur1 || cur2) {
		Node *newNode = new Node;
		if(cur2 == NULL || (cur1 != NULL && cur1->data <= cur2->data)) {
			newNode->data = cur1->data;
			cur1 = cur1->next;
		}
		else if(cur1 == NULL || (cur2 != NULL && cur1->data > cur2->data)) {
			newNode->data = cur2->data;
			cur2 = cur2->next;
		}
		newNode->next = NULL;
		cur->next = newNode;
		cur = cur->next;
	}
	return *ans;
} 
int main() {
	Node linkList;
	linkList.data = 0;
	linkList.next = NULL;
	add(&linkList);
	add(&linkList);
	add(&linkList);
	print(&linkList);

	Node linkList1;
	linkList1.data = 0;
	linkList1.next = NULL;
	add(&linkList1);
	add(&linkList1);
	add(&linkList1);
	print(&linkList1);
	Node ans = concat(&linkList, &linkList1);
	print(&ans);
	system("pause");
}