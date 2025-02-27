/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    const N = arr.length;
    let maxLen = 0;
    const dp = Array.from({length:N}, () => new Array(N).fill(0))
    for (let cIdx = 2; cIdx < N; cIdx++) {
        let start = 0
        let end = cIdx - 1;

        while (start < end) {
            const pairSum = arr[start] + arr[end]

            if (pairSum > arr[cIdx]) {
                end--
            } else if (pairSum < arr[cIdx]) {
                start++
            } else {
                dp[end][cIdx] = dp[start][end] + 1;
                maxLen = Math.max(dp[end][cIdx], maxLen)

                end--;
                start++
            }
        }
    }
    return maxLen === 0 ? 0 : maxLen + 2
};