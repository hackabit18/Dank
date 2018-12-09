var output_txt = 'Breakpoint 74, main () at h.cpp:77`!`!77	{`!`!g = {V = 1431656784, adj = 0x555555554ac0 <_start>}`!`!@@@@@@#####`!`!Breakpoint 78, main () at h.cpp:79`!`!79	    Graph g(4);`!`!g = {V = 1431656784, adj = 0x555555554ac0 <_start>}`!`!@@@@@@#####`!`!Breakpoint 1, Graph::Graph (this=0x7fffffffeb30, V=4) at h.cpp:27`!`!27	    this->V = V;`!`!No locals.`!`!@@@@@@#####`!`!Breakpoint 28, Graph::Graph (this=0x7fffffffeb30, V=4) at h.cpp:28`!`!28	    adj = new list<int>[V];`!`!No locals.`!`!@@@@@@#####`!`!Breakpoint 29, Graph::Graph (this=0x7fffffffeb30, V=4) at h.cpp:29`!`!29	}`!`!No locals.`!`!@@@@@@#####`!`!Breakpoint 80, main () at h.cpp:80`!`!80	    g.addEdge(0, 1);`!`!g = {V = 4, adj = 0x555555769e78}`!`!@@@@@@#####`!`!Breakpoint 30, Graph::addEdge (this=0x7fffffffeb30, v=0, w=1) at h.cpp:33`!`!33	    adj[v].push_back(w); // Add w to vs list.`!`!No locals.`!`!@@@@@@#####`!`!Breakpoint 34, Graph::addEdge (this=0x7fffffffeb30, v=0, w=1) at h.cpp:34`!`!34	}`!`!No locals.`!`!@@@@@@#####`!`!Breakpoint 81, main () at h.cpp:81`!`!81	    g.addEdge(0, 2);`!`!g = {V = 4, adj = 0x555555769e78}`!`!@@@@@@#####`!`!Breakpoint 30, Graph::addEdge (this=0x7fffffffeb30, v=0, w=2) at h.cpp:33`!`!33	    adj[v].push_back(w); // Add w to vs list.`!`!No locals.`!`!@@@@@@#####`!`!Breakpoint 34, Graph::addEdge (this=0x7fffffffeb30, v=0, w=2) at h.cpp:34`!`!34	}`!`!No locals.`!`!@@@@@@#####`!`!Breakpoint 82, main () at h.cpp:82`!`!82	    g.addEdge(1, 2);`!`!g = {V = 4, adj = 0x555555769e78}`!`!@@@@@@#####`!`!Breakpoint 30, Graph::addEdge (this=0x7fffffffeb30, v=1, w=2) at h.cpp:33`!`!33	    adj[v].push_back(w); // Add w to vs list.`!`!No locals.`!`!@@@@@@#####`!`!Breakpoint 34, Graph::addEdge (this=0x7fffffffeb30, v=1, w=2) at h.cpp:34`!`!34	}`!`!No locals.`!`!@@@@@@#####`!`!Breakpoint 83, main () at h.cpp:83`!`!83	    g.addEdge(2, 0);`!`!g = {V = 4, adj = 0x555555769e78}`!`!@@@@@@#####`!`!Breakpoint 30, Graph::addEdge (this=0x7fffffffeb30, v=2, w=0) at h.cpp:33`!`!33	    adj[v].push_back(w); // Add w to vs list.`!`!No locals.`!`!@@@@@@#####`!`!Breakpoint 34, Graph::addEdge (this=0x7fffffffeb30, v=2, w=0) at h.cpp:34`!`!34	}`!`!No locals.`!`!@@@@@@#####`!`!Breakpoint 84, main () at h.cpp:84`!`!84	    g.addEdge(2, 3);`!`!g = {V = 4, adj = 0x555555769e78}`!`!@@@@@@#####`!`!Breakpoint 30, Graph::addEdge (this=0x7fffffffeb30, v=2, w=3) at h.cpp:33`!`!33	    adj[v].push_back(w); // Add w to vs list.`!`!No locals.`!`!@@@@@@#####`!`!Breakpoint 34, Graph::addEdge (this=0x7fffffffeb30, v=2, w=3) at h.cpp:34`!`!34	}`!`!No locals.`!`!@@@@@@#####`!`!Breakpoint 85, main () at h.cpp:85`!`!85	    g.addEdge(3, 3);`!`!g = {V = 4, adj = 0x555555769e78}`!`!@@@@@@#####`!`!Breakpoint 30, Graph::addEdge (this=0x7fffffffeb30, v=3, w=3) at h.cpp:33`!`!33	    adj[v].push_back(w); // Add w to vs list.`!`!No locals.`!`!@@@@@@#####`!`!Breakpoint 34, Graph::addEdge (this=0x7fffffffeb30, v=3, w=3) at h.cpp:34`!`!34	}`!`!No locals.`!`!@@@@@@#####`!`!Breakpoint 86, main () at h.cpp:88`!`!88	         << "(starting from vertex 2) \n";`!`!g = {V = 4, adj = 0x555555769e78}`!`!@@@@@@#####`!`!Breakpoint 89, main () at h.cpp:89`!`!89	    g.BFS(2);`!`!g = {V = 4, adj = 0x555555769e78}`!`!@@@@@@#####`!`!Breakpoint 35, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:37`!`!37	{`!`!visited = 0x555555554ac0 <_start>`!`!queue = std::__cxx11::list = {[0] = 0<error reading variable: Cannot access memory at address 0x1>...}`!`!i = 1702130277`!`!@@@@@@#####`!`!Breakpoint 38, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:39`!`!39	    bool *visited = new bool[V];`!`!visited = 0x555555554ac0 <_start>`!`!queue = std::__cxx11::list = {[0] = 0<error reading variable: Cannot access memory at address 0x1>...}`!`!i = 1702130277`!`!@@@@@@#####`!`!Breakpoint 40, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:40`!`!40	    for(int i = 0; i < V; i++)`!`!i = 21845`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 0<error reading variable: Cannot access memory at address 0x1>...}`!`!i = 1702130277`!`!@@@@@@#####`!`!Breakpoint 41, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:41`!`!41	        visited[i] = false;`!`!i = 0`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 0<error reading variable: Cannot access memory at address 0x1>...}`!`!i = 1702130277`!`!@@@@@@#####`!`!Breakpoint 41, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:41`!`!41	        visited[i] = false;`!`!i = 1`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 0<error reading variable: Cannot access memory at address 0x1>...}`!`!i = 1702130277`!`!@@@@@@#####`!`!Breakpoint 41, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:41`!`!41	        visited[i] = false;`!`!i = 2`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 0<error reading variable: Cannot access memory at address 0x1>...}`!`!i = 1702130277`!`!@@@@@@#####`!`!Breakpoint 41, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:41`!`!41	        visited[i] = false;`!`!i = 3`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 0<error reading variable: Cannot access memory at address 0x1>...}`!`!i = 1702130277`!`!@@@@@@#####`!`!Breakpoint 42, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:44`!`!44	    list<int> queue;`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 0<error reading variable: Cannot access memory at address 0x1>...}`!`!i = 1702130277`!`!@@@@@@#####`!`!Breakpoint 45, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:47`!`!47	    visited[s] = true;`!`!visited = 0x55555576afb0`!`!queue = empty std::__cxx11::list`!`!i = 1702130277`!`!@@@@@@#####`!`!Breakpoint 48, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:48`!`!48	    queue.push_back(s);`!`!visited = 0x55555576afb0`!`!queue = empty std::__cxx11::list`!`!i = 1702130277`!`!@@@@@@#####`!`!Breakpoint 49, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:52`!`!52	    list<int>::iterator i;`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 2}`!`!i = 1702130277`!`!@@@@@@#####`!`!Breakpoint 53, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:54`!`!54	    while(!queue.empty())`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 2}`!`!i = non-dereferenceable iterator for std::list`!`!@@@@@@#####`!`!Breakpoint 55, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:57`!`!57	        s = queue.front();`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 2}`!`!i = non-dereferenceable iterator for std::list`!`!@@@@@@#####`!`!Breakpoint 58, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:58`!`!58	        cout << s << " ";`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 2}`!`!i = non-dereferenceable iterator for std::list`!`!@@@@@@#####`!`!Breakpoint 59, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:59`!`!59	        queue.pop_front();`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 2}`!`!i = non-dereferenceable iterator for std::list`!`!@@@@@@#####`!`!Breakpoint 60, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:64`!`!64	        for (i = adj[s].begin(); i != adj[s].end(); ++i)`!`!visited = 0x55555576afb0`!`!queue = empty std::__cxx11::list`!`!i = non-dereferenceable iterator for std::list`!`!@@@@@@#####`!`!Breakpoint 65, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:66`!`!66	            if (!visited[*i])`!`!visited = 0x55555576afb0`!`!queue = empty std::__cxx11::list`!`!i = 0`!`!@@@@@@#####`!`!Breakpoint 67, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:68`!`!68	                visited[*i] = true;`!`!visited = 0x55555576afb0`!`!queue = empty std::__cxx11::list`!`!i = 0`!`!@@@@@@#####`!`!Breakpoint 69, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:69`!`!69	                queue.push_back(*i);`!`!visited = 0x55555576afb0`!`!queue = empty std::__cxx11::list`!`!i = 0`!`!@@@@@@#####`!`!Breakpoint 65, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:66`!`!66	            if (!visited[*i])`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 0}`!`!i = 3`!`!@@@@@@#####`!`!Breakpoint 67, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:68`!`!68	                visited[*i] = true;`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 0}`!`!i = 3`!`!@@@@@@#####`!`!Breakpoint 69, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:69`!`!69	                queue.push_back(*i);`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 0}`!`!i = 3`!`!@@@@@@#####`!`!Breakpoint 53, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:54`!`!54	    while(!queue.empty())`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 0, [1] = 3}`!`!i = 2`!`!@@@@@@#####`!`!Breakpoint 55, Graph::BFS (this=0x7fffffffeb30, s=2) at h.cpp:57`!`!57	        s = queue.front();`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 0, [1] = 3}`!`!i = 2`!`!@@@@@@#####`!`!Breakpoint 58, Graph::BFS (this=0x7fffffffeb30, s=0) at h.cpp:58`!`!58	        cout << s << " ";`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 0, [1] = 3}`!`!i = 2`!`!@@@@@@#####`!`!Breakpoint 59, Graph::BFS (this=0x7fffffffeb30, s=0) at h.cpp:59`!`!59	        queue.pop_front();`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 0, [1] = 3}`!`!i = 2`!`!@@@@@@#####`!`!Breakpoint 60, Graph::BFS (this=0x7fffffffeb30, s=0) at h.cpp:64`!`!64	        for (i = adj[s].begin(); i != adj[s].end(); ++i)`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 3}`!`!i = 2`!`!@@@@@@#####`!`!Breakpoint 65, Graph::BFS (this=0x7fffffffeb30, s=0) at h.cpp:66`!`!66	            if (!visited[*i])`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 3}`!`!i = 1`!`!@@@@@@#####`!`!Breakpoint 67, Graph::BFS (this=0x7fffffffeb30, s=0) at h.cpp:68`!`!68	                visited[*i] = true;`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 3}`!`!i = 1`!`!@@@@@@#####`!`!Breakpoint 69, Graph::BFS (this=0x7fffffffeb30, s=0) at h.cpp:69`!`!69	                queue.push_back(*i);`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 3}`!`!i = 1`!`!@@@@@@#####`!`!Breakpoint 65, Graph::BFS (this=0x7fffffffeb30, s=0) at h.cpp:66`!`!66	            if (!visited[*i])`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 3, [1] = 1}`!`!i = 2`!`!@@@@@@#####`!`!Breakpoint 53, Graph::BFS (this=0x7fffffffeb30, s=0) at h.cpp:54`!`!54	    while(!queue.empty())`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 3, [1] = 1}`!`!i = 2`!`!@@@@@@#####`!`!Breakpoint 55, Graph::BFS (this=0x7fffffffeb30, s=0) at h.cpp:57`!`!57	        s = queue.front();`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 3, [1] = 1}`!`!i = 2`!`!@@@@@@#####`!`!Breakpoint 58, Graph::BFS (this=0x7fffffffeb30, s=3) at h.cpp:58`!`!58	        cout << s << " ";`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 3, [1] = 1}`!`!i = 2`!`!@@@@@@#####`!`!Breakpoint 59, Graph::BFS (this=0x7fffffffeb30, s=3) at h.cpp:59`!`!59	        queue.pop_front();`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 3, [1] = 1}`!`!i = 2`!`!@@@@@@#####`!`!Breakpoint 60, Graph::BFS (this=0x7fffffffeb30, s=3) at h.cpp:64`!`!64	        for (i = adj[s].begin(); i != adj[s].end(); ++i)`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 1}`!`!i = 2`!`!@@@@@@#####`!`!Breakpoint 65, Graph::BFS (this=0x7fffffffeb30, s=3) at h.cpp:66`!`!66	            if (!visited[*i])`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 1}`!`!i = 3`!`!@@@@@@#####`!`!Breakpoint 53, Graph::BFS (this=0x7fffffffeb30, s=3) at h.cpp:54`!`!54	    while(!queue.empty())`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 1}`!`!i = 1`!`!@@@@@@#####`!`!Breakpoint 55, Graph::BFS (this=0x7fffffffeb30, s=3) at h.cpp:57`!`!57	        s = queue.front();`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 1}`!`!i = 1`!`!@@@@@@#####`!`!Breakpoint 58, Graph::BFS (this=0x7fffffffeb30, s=1) at h.cpp:58`!`!58	        cout << s << " ";`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 1}`!`!i = 1`!`!@@@@@@#####`!`!Breakpoint 59, Graph::BFS (this=0x7fffffffeb30, s=1) at h.cpp:59`!`!59	        queue.pop_front();`!`!visited = 0x55555576afb0`!`!queue = std::__cxx11::list = {[0] = 1}`!`!i = 1`!`!@@@@@@#####`!`!Breakpoint 60, Graph::BFS (this=0x7fffffffeb30, s=1) at h.cpp:64`!`!64	        for (i = adj[s].begin(); i != adj[s].end(); ++i)`!`!visited = 0x55555576afb0`!`!queue = empty std::__cxx11::list`!`!i = 1`!`!@@@@@@#####`!`!Breakpoint 65, Graph::BFS (this=0x7fffffffeb30, s=1) at h.cpp:66`!`!66	            if (!visited[*i])`!`!visited = 0x55555576afb0`!`!queue = empty std::__cxx11::list`!`!i = 2`!`!@@@@@@#####`!`!Breakpoint 53, Graph::BFS (this=0x7fffffffeb30, s=1) at h.cpp:54`!`!54	    while(!queue.empty())`!`!visited = 0x55555576afb0`!`!queue = empty std::__cxx11::list`!`!i = 1`!`!@@@@@@#####`!`!Breakpoint 70, Graph::BFS (this=0x7fffffffeb30, s=1) at h.cpp:73`!`!73	}`!`!visited = 0x55555576afb0`!`!queue = empty std::__cxx11::list`!`!i = 1`!`!@@@@@@#####`!`!Breakpoint 90, main () at h.cpp:91`!`!91	    return 0;`!`!g = {V = 4, adj = 0x555555769e78}`!`!Following is Breadth First Traversal (starting from vertex 2)`!`!2 0 3 1 [Inferior 1 (process 28149) exited normally]`!`!';
var datatypes_txt='type = class Graph {`!`!type = class Graph {`!`!type = class Graph {`!`!type = class Graph {`!`!type = class Graph {`!`!type = class Graph {`!`!type = class Graph {`!`!type = class Graph {`!`!type = class Graph {`!`!type = class Graph {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = int`!`!type = bool *`!`!type = std::list<int>`!`!type = int`!`!type = int`!`!type = bool *`!`!type = std::list<int>`!`!type = int`!`!type = int`!`!type = bool *`!`!type = std::list<int>`!`!type = int`!`!type = int`!`!type = bool *`!`!type = std::list<int>`!`!type = int`!`!type = int`!`!type = bool *`!`!type = std::list<int>`!`!type = int`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = bool *`!`!type = std::list<int>`!`!type = struct std::_List_iterator<int> {`!`!type = class Graph {`!`!';
var datatypes = datatypes_txt.split('`!`!');
var data = output_txt.split('`!`!');
var datatype_index = 0;
var i;
var acc = document.getElementById('acc');
var currentFunction = ' ';
var prevFunction = '';
var temp_div;


(editor21.setValue('Compiled Succesfully.',-1));
//alert(topic);



for(i=0; i<data.length; i++) {
    if(data[i] === '@@@@@@#####') {
        continue;
    }
    if(data[i] == 'No locals.') {
        continue;
    }
    var index = data[i].indexOf(' ');
    var str = data[i].substring(0, index);
    if(str === 'Breakpoint') {
        currentFunction = functionName(data[i]);
        if(currentFunction !== prevFunction) {
            if(i != 0) {
                var temp_button = document.createElement('button');
                temp_button.innerHTML = 'End';
                temp_div.appendChild(temp_button);
            }
            var head_button = document.createElement('button');
            head_button.setAttribute('class', 'accordion headAccordion');
            prevFunction = currentFunction;
            head_button.innerHTML = prevFunction;
            acc.appendChild(head_button);
            var div = document.createElement('div');
acc.appendChild(div);
            div.setAttribute('class', 'panel');
        }
        i++;
        if(data[i] == 'No locals.') {
            forSingleElement('No locals', 'No locals variables in this scope', divv);
            continue;
        }
        var divv = document.createElement('div');
        divv.setAttribute('class', 'panel');
        var programLine = document.createElement('button');
        programLine.setAttribute('class', 'accordion');
        var temp_programLineType = data[i].substring(0, data[i].indexOf(' '));
        var temp_programLine = data[i].substring(data[i].indexOf(' '), );
        programLine.innerHTML = 'Before Line ' + temp_programLineType + ':' + temp_programLine;
        div.appendChild(programLine);
        div.appendChild(divv);
        i++;
        temp_div = div;
        if(data[i] == 'No locals.') {
            forSingleElement('No locals', 'No locals variables in this scope', divv);
            continue;
        }
        while(data[i] !== '@@@@@@#####') {
 if(i == data.length-1)
                break;

            // Checking if the variable is a string array
            if(is2DCharArray(datatypes[datatype_index])) {
                var array_arr = returnArray(data[i]);
                var index_of_blank = data[i].indexOf(' ');
                var array_name = data[i].substring(0, index_of_blank);
                for1DArray(array_arr, array_name, datatypes[datatype_index], divv);
            }

            // Checking if the variable is a string
            else if(isCharArray(datatypes[datatype_index])) {
                forSingleElement(data[i], datatypes[datatype_index], divv);
            }

            // Checking if the variable is a 2D array
            else if(is2DArray(datatypes[datatype_index])) {
                var twod_arr = return2DArray(data[i]);
                var index_of_blank = data[i].indexOf(' ');
                var array_name = data[i].substring(0, index_of_blank);
                for2DArray(twod_arr, array_name, datatypes[datatype_index], divv);
            }
            
            // Checking if the variable is a 1D array
            else if(isArray(datatypes[datatype_index])) {
                var array_arr = returnArray(data[i]);
                var index_of_blank = data[i].indexOf(' ');
                var array_name = data[i].substring(0, index_of_blank);
                for1DArray(array_arr, array_name, datatypes[datatype_index], divv);
            }

            // Checking if the variable is a 2D vector
            else if(is2DVector(datatypes[datatype_index])) {
                var array_arr = returnArray(data[i]);
                var index_of_blank = data[i].indexOf(' ');
                var array_name = data[i].substring(0, index_of_blank);
                for2DVector(array_arr, array_name, datatypes[datatype_index], divv);
            }

            // Checking if the variable is a 1D vector
            else if(isVector(datatypes[datatype_index])) {
                var array_arr = returnArray(data[i]);
                var index_of_blank = data[i].indexOf(' ');
                var array_name = data[i].substring(0, index_of_blank);
                for1DVector(array_arr, array_name, datatypes[datatype_index], divv);
            }

            // Checking is the variable is a stack
            else if(isStack(datatypes[datatype_index])) {
                var array_arr = returnArray(data[i]);
                var index_of_blank = data[i].indexOf(' ');
                var array_name = data[i].substring(0, index_of_blank);
                for1DArray(array_arr, array_name, datatypes[datatype_index], divv);
            }

            // Checking is the variable is a quene
            else if(isQuene(datatypes[datatype_index])) {
                var array_arr = returnArray(data[i]);
                var index_of_blank = data[i].indexOf(' ');
                var array_name = data[i].substring(0, index_of_blank);
                for1DArray(array_arr, array_name, datatypes[datatype_index], divv);
            }

            // Checking if the variable is anything else (including single elements)
            else {
                forSingleElement(data[i], datatypes[datatype_index], divv);
            }
            i++;
            datatype_index++;
        }
    }
    if(i == data.length-1) {
        var temp_button = document.createElement('button');
        temp_button.innerHTML = 'End';
        div.appendChild(temp_button);
    }
}

/* To display single element */
function forSingleElement(name, type, div) {
    var button = document.createElement('button');
    button.style.margin = '10px';
    button.innerHTML = name;
    button.style.background = getRandomColor();
    button.setAttribute('title', type);
    div.appendChild(button);
}

/* Checks if the string is 1D array using regex */
function isArray(s) {
    var pattern = /type\s=\s.*\s[[0-9]*]/;
    return pattern.test(s);
}

/* Checks if the string is 1D char array using regex */
function isCharArray(s) {
    var pattern = /type\s=\schar\s[[0-9]*]/;
    return pattern.test(s);
}

/* Checks if the string is 2D char array using regex */
function is2DCharArray(s) {
    var pattern = /type\s=\schar\s[[0-9]*][[0-9]*]/;
    return pattern.test(s);
}

/* Checks if the string is 2D array using regex */
function is2DArray(s) {
    var pattern = /type\s=\s.*\s[[0-9]*][[0-9]*]/;
    return pattern.test(s);
}

/* Checks if the string is a 1D vector */
function isVector(s) {
    var flag = false;
    if(s.substring(7, 18) === 'std::vector') {
        flag = true;
    }
    return flag;
}

/* Checks if the string is a 2D vector */
function is2DVector(s) {
    if(s.substring(7, 18) === 'std::vector') {
        var index_of_brac = s.indexOf('<');
        var last_index_of_brac = s.lastIndexOf('>');
        var str = s.substring(index_of_brac+1, last_index_of_brac);
        var vec = str.substring(0, 11);
        var flag = false;
        if(vec === 'std::vector') {
            flag = true;
        }
        return flag;
    }
    else {
        return false;
    }
}

/* Checks if the string is a stack */
function isStack(s) {
    var pattern = /type\s=\sclass\sstd::stack.*/;
    return pattern.test(s);
}

/* Checks if the string is a quene */
function isQuene(s) {
    var pattern = /type\s=\sclass\sstd::quene.*/;
    return pattern.test(s);
}

/* Helper function to convert a string to array */
function returnArray(s) {
    var firstIndex = s.indexOf('{');
    var lastIndex = s.lastIndexOf('}');
    var str = s.substring(firstIndex + 1, lastIndex);
    var arr = str.split(',');
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].trim();
    }
    return arr;
}

/* Helper function to convert string to 2D array */
function return2DArray(s) {
    var firstIndex = s.indexOf('{');
    var lastIndex = s.lastIndexOf('}');
    var str = s.substring(firstIndex+1, lastIndex);
    var temp = '';
    var a;
    var arr = [];
    var open_index = 0, close_index = 0;
    for(var i=0; i<str.length; i++) {
        if(str.charAt(i) == '{') {
            open_index = i;
            temp = temp + str.charAt(i);
        }
        else if(str.charAt(i) == '}') {
            close_index = i;
            temp = temp + str.charAt(i);
            a = returnArray(temp);
            arr.push(a);
            temp = '';
        }
        else {
            temp = temp + str.charAt(i);
        }
    }
    return arr;
}

/* To display 1D arrays */
function for1DArray(arr, name, type, div) {
    var length = arr.length;
    forSingleElement(name, type, divv);
    for(var i = 0; i < length; i++ ) {
        var button = document.createElement('button');
        button.innerHTML = arr[i];
        button.setAttribute('title', type);
        button.style.background = getRandomColor();
        div.appendChild(button);
    }
}

/* To display 2D arrays */
function for2DArray(arr, name, type, div) {
    div.innerHTML += '<br/>';
    var new_div = document.createElement('div');
    var button_name = document.createElement('button');
    button_name.innerHTML = name;
    new_div.appendChild(button_name);
    button_name.style.background = getRandomColor();
    button_name.style.paddingBottom = '0px';
    button_name.style.marginBottom = '0px';
    new_div.innerHTML += '<br/>';
    var length = [arr.length, arr[0].length];
    for(var i=0; i<length[0]; i++) {
        for(var j=0; j<length[1]; j++) {
            var button = document.createElement('button');
            button.innerHTML = arr[i][j];
            button.style.marginTop = '0px';
            button.style.paddingTop = '0px';
            button.style.marginBottom = '0px';
            button.style.paddingBottom = '0px';
            
            button.setAttribute('title', type);
            button.style.background = getRandomColor();
            new_div.appendChild(button);

        }
        new_div.innerHTML += '<br/>';
    }
    div.appendChild(new_div);
}

/* To display 1D vectors */
function for1DVector(arr, name, type, div){
    var length = arr.length;
    var button = document.createElement('button');
    button.innerHTML = name;
    button.setAttribute('class', 'vector_button');
    button.style.background = getRandomColor();
    button.setAttribute('title', type);
    div.appendChild(button);
    for(var i = 0; i < length; i++ ){
        var but = document.createElement('button');
        but.setAttribute('class', 'vector_button');
        but.innerHTML = arr[i];
        but.setAttribute('title', type);
        but.style.background = getRandomColor();
        div.appendChild(but);
    }
}

/* To display 2D arrays */
function for2DVector(arr, name, type, div) {
    div.innerHTML += '<br/>';
    var new_div = document.createElement('div');
    var button_name = document.createElement('button');
    button_name.innerHTML = name;
    new_div.appendChild(button_name);
    button_name.style.background = getRandomColor();
    button_name.style.paddingBottom = '0px';
    button_name.style.marginBottom = '0px';
    new_div.innerHTML += '<br/>';
    var length = [arr.length, arr[0].length];
    for(var i=0; i<length[0]; i++) {
        for(var j=0; j<length[1]; j++) {
            var button = document.createElement('button');
            button.innerHTML = arr[i][j];
            button.style.marginTop = '0px';
            button.style.paddingTop = '0px';
            button.style.marginBottom = '0px';
            button.style.paddingBottom = '0px';
            
            button.setAttribute('title', type);
            button.style.background = getRandomColor();
            new_div.appendChild(button);

        }
        new_div.innerHTML += '<br/>';
    }
    div.appendChild(new_div);
}

/* Helper function to return name of function from Breakpoint line */
function functionName(s) {
    var commaIndex = s.indexOf(',');
    var blankIndex = s.lastIndexOf(' ');
    var str = s.substring(commaIndex + 2, blankIndex - 3);
    return str;
}

/* Helper function to generate random colour */
function getRandomColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}