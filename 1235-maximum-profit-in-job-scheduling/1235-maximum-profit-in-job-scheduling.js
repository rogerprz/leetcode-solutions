/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    if (startTime.length === 0) return 0;
    const N = profit.length;
    const jobs = new Array(N);

    for (let i = 0; i< N;i++) {
        jobs[i] = [endTime[i], startTime[i], profit[i]]
    }

    jobs.sort((a,b) => a[0] - b[0]);

    const dp = new Array(N+1).fill(0);
    console.log("J:", jobs)
    // [ 3, 1, 50 ], [ 4, 2, 10 ], [ 5, 3, 40 ], [ 6, 3, 70 ]

    for (let i = 0; i < N; i++) {
        const [end, start, profit] = jobs[i];

        // we can skip it 
        // take it 
        // find the upper bounds using binary search
        let low = 0; 
        let high = 1; 

        while (low < high) {
            const mid = Math.floor((low + high)/ 2);
            const endJobTime = jobs[mid][0]
            // does the mid endJobTime <= start
            if (start > endJobTime) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        dp[i + 1] = Math.max(dp[i], dp[low] + profit)
    }
    return dp[N];
};