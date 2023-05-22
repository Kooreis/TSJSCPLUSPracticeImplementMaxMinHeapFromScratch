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