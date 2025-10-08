function maxEvents(events) {
  events.sort((a, b) => a[1] - b[1]);

  const parent = new Map();
  let count = 0;

  function find(x) {
    if (!parent.has(x)) return x;
    const next = find(parent.get(x));
    parent.set(x, next);
    return next;
  }

  for (const [start, end] of events) {
    const available = find(start);
    if (available <= end) {
      count++;
      parent.set(available, available + 1); // mark as used
    }
  }

  return count;
}
