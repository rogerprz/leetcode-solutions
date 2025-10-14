// A standard Min-Heap implementation is required as JS doesn't have a native one.
class Heap {
    constructor(comparator = (a, b) => a - b) { this.heap = []; this.comparator = comparator; }
    size() { return this.heap.length; }
    peek() { return this.heap[0]; }
    add(v) { this.heap.push(v); this.bubbleUp(this.size() - 1); }
    poll() { this.swap(0, this.size() - 1); const v = this.heap.pop(); this.bubbleDown(0); return v; }
    swap(i, j) { [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; }
    bubbleUp(i) {
        const p = Math.floor((i - 1) / 2);
        if (p >= 0 && this.comparator(this.heap[i], this.heap[p]) < 0) {
            this.swap(i, p); this.bubbleUp(p);
        }
    }
    bubbleDown(i) {
        const l = 2 * i + 1, r = 2 * i + 2; let m = i;
        if (l < this.size() && this.comparator(this.heap[l], this.heap[m]) < 0) m = l;
        if (r < this.size() && this.comparator(this.heap[r], this.heap[m]) < 0) m = r;
        if (m !== i) { this.swap(i, m); this.bubbleDown(m); }
    }
}

class MedianFinder {
    constructor() {
        // Max-heap for the smaller half
        this.small_half = new Heap((a, b) => b - a);
        // Min-heap for the larger half
        this.large_half = new Heap((a, b) => a - b);
    }
    
    addNum(num) {
        // 1. Add to small_half
        this.small_half.add(num);
        
        // 2. Balance Values
        this.large_half.add(this.small_half.poll());
        
        // 3. Balance Sizes
        if (this.large_half.size() > this.small_half.size()) {
            this.small_half.add(this.large_half.poll());
        }
    }

    findMedian() {
        if (this.small_half.size() > this.large_half.size()) {
            return this.small_half.peek();
        } else {
            return (this.small_half.peek() + this.large_half.peek()) / 2.0;
        }
    }
}