class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Compare by processingTime first, then index
  compare(a, b) {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  }

  push(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) return null;
    const top = this.heap[0];
    const end = this.heap.pop();
    if (this.size() > 0) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return top;
  }

  bubbleUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.compare(this.heap[i], this.heap[parent]) < 0) {
        [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
        i = parent;
      } else break;
    }
  }

  bubbleDown() {
    let i = 0;
    const n = this.heap.length;
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < n && this.compare(this.heap[left], this.heap[smallest]) < 0) {
        smallest = left;
      }
      if (right < n && this.compare(this.heap[right], this.heap[smallest]) < 0) {
        smallest = right;
      }
      if (smallest !== i) {
        [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
        i = smallest;
      } else break;
    }
  }

  size() {
    return this.heap.length;
  }
}

var getOrder = function(tasks) {
  // Store (enqueue, process, index)
  const sortedTasks = tasks.map((t, i) => [t[0], t[1], i]).sort((a, b) => a[0] - b[0]);

  const result = [];
  const heap = new MinHeap();

  let time = 0;
  let taskIndex = 0;

  while (taskIndex < sortedTasks.length || heap.size() > 0) {
    if (heap.size() === 0 && time < sortedTasks[taskIndex][0]) {
      time = sortedTasks[taskIndex][0];
    }

    // Push all tasks that have arrived by current time
    while (taskIndex < sortedTasks.length && sortedTasks[taskIndex][0] <= time) {
      const [enqueue, process, idx] = sortedTasks[taskIndex];
      heap.push([process, idx]);
      taskIndex++;
    }

    const [process, idx] = heap.pop();
    time += process;
    result.push(idx);
  }

  return result;
};
