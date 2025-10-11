/**
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function(power) {
    const set = new Set()
    const freq = {}

    for (const cast of power) {
        if (!(cast in freq)) {
            freq[cast] = 0
            set.add(cast)
        }
        freq[cast] += cast
    }
    const keys = [...set].sort((a,b) => a - b)
    const N = keys.length;
    const dp = new Array(N).fill(0)

    dp[0] = freq[keys[0]] 


    for (let i = 1; i < N; i++) {
        let take = freq[keys[i]]
        let l = 0 ;
        let r = i - 1;
        let ans = -1;

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            if (keys[mid] <= keys[i] - 3) {
                ans = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        if (ans >= 0) {
            take += dp[ans]
        }
        dp[i] = Math.max(dp[i - 1], take)
    }
    return dp[N - 1]
};