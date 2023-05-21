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
}