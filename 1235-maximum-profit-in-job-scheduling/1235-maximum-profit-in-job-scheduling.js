/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    const N = profit.length
    const jobs = new Array(N)

    for (let i = 0; i< N; i++) {
        jobs[i] = [endTime[i], startTime[i], profit[i]]
    }

    jobs.sort((a, b) => a[0] - b[0])
    const dp = new Array(N + 1).fill(0)

    for (let i = 0; i < N; i++) {
        const [end, start, profit] = jobs[i]

        const latestNonConflictJobIndex = upperBound(jobs, i, start);
        dp[i + 1] = Math.max(dp[i], dp[latestNonConflictJobIndex] + profit);
    }

    return dp[N]
};

function upperBound(jobs, endIndex, targetTime) {
     let low = 0;
    let high = endIndex;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (jobs[mid][0] <= targetTime) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
}