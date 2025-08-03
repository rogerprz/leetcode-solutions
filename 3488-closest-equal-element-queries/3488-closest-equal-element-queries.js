function solveQueries(nums, queries) {
    const valToIndices = new Map();
    const len = nums.length;
    const answer = [];

    // 1. Build the value-to-indices map
    for (let i = 0; i < len; i++) {
        const num = nums[i];
        if (!valToIndices.has(num)) valToIndices.set(num, []);
        valToIndices.get(num).push(i);
    }

    for (const q of queries) {
        const num = nums[q];
        const indices = valToIndices.get(num);
        if (indices.length === 1) {
            answer.push(-1);
            continue;
        }

        let left = 0, right = indices.length - 1;
        let best = Infinity;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (indices[mid] === q) {
                let prevIdx = (mid - 1 + indices.length) % indices.length;
                let nextIdx = (mid + 1) % indices.length;
                let d1 = Math.abs(q - indices[prevIdx]);
                let d2 = Math.abs(q - indices[nextIdx]);

                best = Math.min(
                    Math.min(d1, len - d1),
                    Math.min(d2, len - d2)
                );
                break;
            } else if (indices[mid] < q) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        answer.push(best);
    }
    return answer;
}