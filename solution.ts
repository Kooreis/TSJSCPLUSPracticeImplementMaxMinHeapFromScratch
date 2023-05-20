Here is a simple implementation of a min heap in TypeScript:

```typescript
class MinHeap {
    heap: number[];

    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 2;
    }

    getParentIndex(childIndex: number): number {
        return Math.floor((childIndex - 1) / 2);
    }

    hasLeftChild(index: number): boolean {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChild(index: number): boolean {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    hasParent(index: number): boolean {
        return this.getParentIndex(index) >= 0;
    }

    leftChild(index: number): number {
        return this.heap[this.getLeftChildIndex(index)];
    }

    rightChild(index: number): number {
        return this.heap[this.getRightChildIndex(index)];
    }

    parent(index: number): number {
        return this.heap[this.getParentIndex(index)];
    }

    swap(indexOne: number, indexTwo: number): void {
        let temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }

    peek(): number {
        if (this.heap.length === 0) throw new Error('Heap is empty');
        return this.heap[0];
    }

    poll(): number {
        if (this.heap.length === 0) throw new Error('Heap is empty');
        let item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }

    add(item: number): void {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp(): void {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown(): void {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
}

let heap = new MinHeap();
heap.add(10);
heap.add(15);
heap.add(20);
heap.add(17);

console.log(heap.poll()); // 10
console.log(heap.poll()); // 15
console.log(heap.poll()); // 17
console.log(heap.poll()); // 20
```

This code creates a MinHeap class with methods to add items, poll the smallest item, and peek at the smallest item without removing it. The heapifyUp and heapifyDown methods ensure that the heap property is maintained after adding or removing items.