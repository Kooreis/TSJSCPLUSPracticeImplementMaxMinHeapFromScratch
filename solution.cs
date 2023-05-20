Here is a simple implementation of a min heap in JavaScript:

```javascript
class MinHeap {
    constructor() {
        this.heap = [null];
    }

    insert(num) {
        this.heap.push(num);
        if (this.heap.length > 2) {
            let idx = this.heap.length - 1;
            while (this.heap[idx] < this.heap[Math.floor(idx/2)]) {
                if (idx >= 1) {
                    [this.heap[Math.floor(idx/2)], this.heap[idx]] = [this.heap[idx], this.heap[Math.floor(idx/2)]];
                    if (Math.floor(idx/2) > 1) {
                        idx = Math.floor(idx/2);
                    } else {
                        break;
                    };
                };
            };
        };
    }

    remove() {
        let smallest = this.heap[1];
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);
            if (this.heap.length === 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
                };
                return smallest;
            };
            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            while (this.heap[i] >= this.heap[left] || this.heap[i] >= this.heap[right]) {
                if (this.heap[left] < this.heap[right]) {
                    [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
                    i = 2 * i
                } else {
                    [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
                    i = 2 * i + 1;
                };
                left = 2 * i;
                right = 2 * i + 1;
                if (this.heap[left] === undefined || this.heap[right] === undefined) {
                    break;
                };
            };
        } else if (this.heap.length === 2) {
            this.heap.splice(1, 1);
        } else {
            return null;
        };
        return smallest;
    }
}

let heap = new MinHeap();
heap.insert(3);
heap.insert(2);
heap.insert(5);
heap.insert(1);
console.log(heap.remove()); // 1
console.log(heap.remove()); // 2
console.log(heap.remove()); // 3
console.log(heap.remove()); // 5
```

This code creates a MinHeap class with methods to insert and remove elements. The insert method adds an element to the heap and reorders the heap to maintain the min heap property. The remove method removes the smallest element from the heap (the root), reorders the heap to maintain the min heap property, and returns the removed element.