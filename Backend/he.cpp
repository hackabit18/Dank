#include <bits/stdc++.h>
using namespace std;
int BIT[1000010];
int arr[1000010];
int block[1000010];
int seqno[1000010];
int length_of_sequence[1000010];
list <pair<int,pair<int,int> > > l;
int n;
void update(int x, int delta)
{
      for(; x <= n; x += x&-x)
        BIT[x] += delta;
}
int query(int x)
{
     int sum = 0;
     for(; x > 0; x -= x&-x)
        sum += BIT[x];
     return sum;
}


int main(){
	int q,k;
	cin >> n >> q >> k;
	int one = 0;
	for(int i=0;i<n;i++){
		cin >> arr[i];
		one += arr[i];
	}
	if(n == one){
		char c;
		for(int i=0;i<q;i++){
			cin >> c;
			if(c=='!')
				continue;
			printf("%d\n",min(n,k));
		}
		exit(0);
	}
	int i = 0;
	for(i=0;i<n;i++){
		if(arr[i]!=1){
			break;
		}
	}
	for(;i<n;i++){
		if(arr[i]!=0){
			break;
		}
		block[i] = -1;
		seqno[i] = -1;
	}
	int s = 1;
	int p;
	for(;i<n;){
		p = 1;
		while(i<n && arr[i] == 1){
			seqno[i] = p;
			block[i] = s;
			p++;
			i++;
		}
		if(i == n){
			break;
		}
		while(i<n && arr[i] == 0){
			block[i] = -1;
			seqno[i] = -1;
			i++;
		}
		s++;
	}
	if(arr[n-1] == 1){
		for(int i=0;i<n;i++){
			if(arr[i]==0){
				break;
			}
			block[i] = s;
			seqno[i] = p;
			p++;
		}
	}
	else{
		p = 1;
		for(int i=0;i<n;i++){
			if(arr[i]==0){
				break;
			}
			block[i] = s;
			seqno[i] = p;
			p++;
		}
	}

	for(int i=0;i<n;i++){
		length_of_sequence[i] = 0;
	}

	for(int i=0;i<n;i++){
		if(arr[i]==1){
			length_of_sequence[block[i]]++; 
		}
	}

	for(int i=0;i<n;i++){
		if(length_of_sequence[i] != 0){
			update(length_of_sequence[i], 1);
		}
	}

	for(int i=0;i<n;i++){
		l.push_back(make_pair(arr[i], make_pair(block[i], seqno[i])));
	}

	if(arr[0] == 1 && arr[n-1] == 1){
		int a = length_of_sequence[block[n-1]] - seqno[n-1];
		int b = seqno[n-1];
		int c = length_of_sequence[block[n-1]];
		update(c, -1);
		update(a, 1);
		update(b, 1);
	}

	for(int i=0;i<q;i++){
		char c;
		cin >> c;
		if(c == '!'){
			// printf("here\n");
			list <pair<int,pair<int,int> > >::iterator it1, it2;
			it1 = l.end();
			it1--;
			it2 = l.begin();
			if(it1->first == 1){
				// printf("sd\n");
				int a;
				if(it2->first == 1){
					a = length_of_sequence[(it1->second).first] - (it1->second).second;
				}
				else{
					a = 0;
				}
				int b = (it1->second).second;
				int c = length_of_sequence[block[n-1]];
				// printf("%d %d %d\n",a,b,c);
				if(a != 0)
					update(a, -1);
				update(b, -1);
				update(a+1, 1);
				if(b!=1)
					update(b-1, 1);
			}
			l.push_front((*it1));
			l.pop_back();
		}
		else{
			int low = 1;
			int high = n;
			int q = query(n);
			int ans = 0;
			if(q==0){
				printf("0\n");
				continue;
			}
			while(low <= high){
				int mid = (low+high)>>1;
				if(query(mid) >= q){
					ans = mid;
					high = mid-1;
				}
				else{
					low = mid+1;
				}
			}
			printf("%d\n",min(ans, k));
		}
	}
	return 0;
}