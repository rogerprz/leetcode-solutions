var maximumSegmentSum = function(nums, removeQueries) {
    const n = nums.length;
    const ans = Array(n).fill(0);
    const parent = Array(n).fill(0).map((_, i) => i);
    const segmentSum = Array(n).fill(0);
    const active = Array(n).fill(false);

    const find = (x) => parent[x] === x ? x : parent[x] = find(parent[x]);
    const union = (x, y) => {
        const rootX = find(x), rootY = find(y);
        if (rootX !== rootY) {
            parent[rootY] = rootX;
            segmentSum[rootX] += segmentSum[rootY];
        }
    }

    let max = 0;

    // Process in reverse
    for (let i = n - 1; i >= 0; i--) {
        ans[i] = max;
        const idx = removeQueries[i];
        active[idx] = true;
        segmentSum[idx] = nums[idx];

        // Merge with neighbors
        if (idx > 0 && active[idx - 1]) union(idx, idx - 1);
        if (idx < n - 1 && active[idx + 1]) union(idx, idx + 1);

        // Update max
        max = Math.max(max, segmentSum[find(idx)]);
    }

    return ans;
};
