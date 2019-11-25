#include <iostream>
using namespace std;

#define rand(maxVal) ((rand() % maxVal) + 1) // 生成从[1, maxVal]之间的一个随机数
#define MAX_PROCESS 50 // 最多的进程数量
#define MAX_SOURCE 100 // 最多的资源总类数
#define MAX_SOURCE_SUM 30  // 每类资源的最大拥有数量

int processSum; // 进程总数量
int sourceSum;  // 资源总类数
int available[MAX_SOURCE]; // 每种资源的可用数量
int maxNeed[MAX_PROCESS][MAX_SOURCE]; // 进程i对资源j的需求数量
int allocation[MAX_PROCESS][MAX_SOURCE]; // 进程i已经拥有的资源j的数量
int need[MAX_PROCESS][MAX_SOURCE]; // 进程i还需要的资源j的数量
int request[MAX_PROCESS][MAX_SOURCE]; // 进程i请求资源j的数量

// 初始化各项数据
void init() {
	srand(int(time(0))); // 避免每次生成的随机数都是一样的
  cout<<"请分别输入进程总数量和资源总类数"<<endl;
  cin>>processSum>>sourceSum;

  for(int i=0; i<sourceSum; i++) {
    available[i] = rand(MAX_SOURCE_SUM);
  }
  for(int i=0; i<processSum; i++) {
    for(int j=0; j<sourceSum; j++) {
      maxNeed[i][j] = rand(MAX_SOURCE_SUM);
      allocation[i][j] = rand(maxNeed[i][j]);
      need[i][j] = maxNeed[i][j] - allocation[i][j];
    }
  }
}

// 打印各项数据
void print() {
  cout<<"当前的进程数量是: "<<processSum<<endl;
  cout<<"当前的资源总类数是: "<<sourceSum<<endl;
  cout<<"各类资源的目前可用数量是——————————————————————————————————————————————"<<endl;
  for(int i=0; i<sourceSum; i++) {
    cout<<"\t"<<char('A'+i)<<": "<<available[i]<<endl;
  }

  cout<<"各个进程的最大资源需求量——————————————————————————————————————————————"<<endl<<"\t";
  for(int j=0; j<sourceSum; j++) {
		cout<<"\t"<<char('A'+j);
  }
	cout<<endl;
  for(int i=0; i<processSum; i++) {
    cout<<"第"<<i+1<<"号进程: ";
    for(int j=0; j<sourceSum; j++) {
      cout<<"\t"<<maxNeed[i][j];
    }
    cout<<endl;
  }
  
  cout<<"各个进程现在拥有的资源数量——————————————————————————————————————————————"<<endl<<"\t";
  for(int j=0; j<sourceSum; j++) {
		cout<<"\t"<<char('A'+j);
  }
	cout<<endl;
  for(int i=0; i<processSum; i++) {
    cout<<"第"<<i+1<<"号进程: ";
    for(int j=0; j<sourceSum; j++) {
      cout<<"\t"<<allocation[i][j];
    }
    cout<<endl;
  }

  cout<<"各个进程还需要的资源数量——————————————————————————————————————————————"<<endl<<"\t";
  for(int j=0; j<sourceSum; j++) {
		cout<<"\t"<<char('A'+j);
  }
	cout<<endl;
  for(int i=0; i<processSum; i++) {
    cout<<"第"<<i+1<<"号进程: ";
    for(int j=0; j<sourceSum; j++) {
      cout<<"\t"<<need[i][j];
    }
    cout<<endl;
  }
  cout<<endl;
}

// 检查要分配的进程和资源数量是否合理
bool checkRequest(int num) {
  if(num <= 0 || num > processSum) {
    cout<<"输入的进程号不存在"<<endl<<endl;
    return false;
  }
  cout<<"请输入要分配给第"<<num<<"号进程的各类资源数量"<<endl;
  for(int i=0; i<sourceSum; i++) {
    cin>>request[num-1][i];
  }
  for(int i=0; i<sourceSum; i++) {
    if (request[num-1][i] > need[num-1][i]) {
      cout<<"Error：请求的资源数量不能超过该进程需要的资源数量"<<endl<<endl;
      return false;
    }
    if (request[num-1][i] > available[i]) {
      cout<<"Error：请求的资源数量不能超过该资源所拥有的数量"<<endl<<endl;
      return false;
    }
  }
  cout<<endl;
  return true;
}

// 检查分配此次资源后是否存在安全序列
bool checkSafe() {
  bool finish[MAX_PROCESS]; // 标志进程是否完成，初始化为未完成
  int availableTemp[MAX_SOURCE]; // 记录进程释放后每种资源的可用数量，避免修改到available数组
  int safeProcessList[MAX_PROCESS]; // 记录安全序列的数组
  int safeProcessSum = 0; // 已完成的进程数量，当safeProcessSum等于processSum时，即存在安全序列
  for(int i=0; i<processSum; i++) {
    finish[i] = false;
  }
  for(int i=0; i<sourceSum; i++) {
    availableTemp[i] = available[i];
  }
  // 再从头检查每个进程，以便检查到之前处于等待状态的进程
  // 之前need可能大于available，但后来其他进程释放资源后，它的need可能就小于available了
  for(int t=0; t<processSum; t++) {
    // 检查每个进程的各个资源需要数量是否会超过该资源现有的数量，未超过的话则完成该进程并释放它，超过的话则不处理它让其等待之后的检查
    for(int i=0; i<processSum; i++) {
      if(finish[i]) {
        continue;
      }
      bool needMoreAvailable = false; // 进程i对资源j的需要数是否大于该资源的现有数量
      for(int j=0; j<sourceSum; j++) {
        if(need[i][j] > availableTemp[j]) {
          needMoreAvailable = true;
          break;
        }
      }
      // 未超过，则释放该进程并记录进安全序列
      if(!needMoreAvailable) {
        finish[i] = true;
        for(int k=0; k<sourceSum; k++) {
          availableTemp[k] += allocation[i][k];
        }
        safeProcessList[t] = i + 1;
        safeProcessSum++;
        break;
      }
    }
  }
  if(safeProcessSum == processSum) {
    cout<<"存在一个安全序列，该安全序列为"<<endl<<"<";
    for(int i=0; i<safeProcessSum; i++) {
      cout<<safeProcessList[i];
      if (i != safeProcessSum - 1) {
        cout<<", ";
      }
    }
    cout<<">"<<endl;
    return true;
  } else {
    cout<<"不存在一个安全序列"<<endl;
    return false;
  }
}

// 银行家算法，分配资源并进行安全序列检查
void banker() {
  cout<<"请输入要分配资源的进程号: ";
  int requestProcessNum;
  cin>>requestProcessNum;
  if(!checkRequest(requestProcessNum)) {
    return;
  };
  // 尝试分配资源
  for(int i=0; i<sourceSum; i++) {
    available[i] -= request[requestProcessNum-1][i];
    need[requestProcessNum-1][i] -= request[requestProcessNum-1][i];
    allocation[requestProcessNum-1][i] += request[requestProcessNum-1][i];
  }
  // 分配资源后进入安全性检查
  // 不存在安全序列，则回退刚才分配的资源
  if(!checkSafe()) {
    for(int i=0; i<sourceSum; i++) {
      available[i] += request[requestProcessNum-1][i];
      need[requestProcessNum-1][i] += request[requestProcessNum-1][i];
      allocation[requestProcessNum-1][i] -= request[requestProcessNum-1][i];
    }
    cout<<"由于不存在安全序列，所以拒绝本次资源申请"<<endl;
  } else {
    cout<<"由于存在安全序列，所以通过本次资源申请"<<endl;
    bool isProcessFinish = true;
    for(int i=0; i<sourceSum; i++) {
      if(need[requestProcessNum-1][i] != 0) {
        isProcessFinish = false;
        break;
      }
    }
    if(isProcessFinish) {
      cout<<"第"<<requestProcessNum<<"号进程处理完毕，释放其占有的资源"<<endl;
      for(int i=0; i<sourceSum; i++) {
        available[i] += allocation[requestProcessNum-1][i];
        maxNeed[requestProcessNum-1][i] = 0;
        allocation[requestProcessNum-1][i] = 0;
      }
    }
  }
  cout<<endl;
  print();
}

int main() {
  while(1) {
    init();
    print();
    while(1) {
      banker();
    }
  }
}