/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    const N = profit.length;
    const jobs = new Array(N);

    for (let i = 0; i < N; i++) {
        jobs[i] = [endTime[i], startTime[i], profit[i]]
    }

    jobs.sort((a, b) => a[0] - b[0])
    const dp = new Array(N + 1).fill(0)
    
    for (let i = 0; i < N; i++) {
        const [end, start, profit] = jobs[i];

        // for each job we have to options;
        // 1. skip it -> dp[i] same as previous state;
        // 2. take it -> dp[latestNonCOnlifctJob] + profit[i];
        // we do binary search to find the upperBound
        let low = 0;
        let high = i;
        
        while (low < high) {
            const mid = Math.floor((low + high)/ 2)
            const endJobTime = jobs[mid][0]
            if (endJobTime <= start) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        dp[i + 1] = Math.max(dp[i], dp[low] + profit)
    }
    return dp[N]
};