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