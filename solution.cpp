```cpp
#include <iostream>
#include <vector>
using namespace std;

class MinHeap {
    vector<int> heap;

    void heapify_up(int i) {
        int parent = (i - 1) / 2;
        if (heap[parent] > heap[i]) {
            swap(heap[i], heap[parent]);
            heapify_up(parent);
        }
    }

    void heapify_down(int i) {
        int left = 2 * i + 1;
        int right = 2 * i + 2;
        int smallest = i;

        if (left < heap.size() && heap[left] < heap[i])
            smallest = left;

        if (right < heap.size() && heap[right] < heap[smallest])
            smallest = right;

        if (smallest != i) {
            swap(heap[i], heap[smallest]);
            heapify_down(smallest);
        }
    }

public:
    void insert(int key) {
        heap.push_back(key);
        int index = heap.size() - 1;
        heapify_up(index);
    }

    void deleteKey(int i) {
        heap[i] = heap.back();
        heap.pop_back();
        heapify_down(i);
    }

    int getMin() { return heap[0]; }
};

int main() {
    MinHeap h;
    h.insert(3);
    h.insert(2);
    h.deleteKey(1);
    h.insert(15);
    h.insert(5);
    h.insert(4);
    h.insert(45);
    cout << h.getMin() << endl;
    return 0;
}
```