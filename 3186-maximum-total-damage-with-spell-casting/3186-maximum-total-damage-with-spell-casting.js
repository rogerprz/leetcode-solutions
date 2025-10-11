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
        const powerKey = keys[i]
        let maxPower = freq[powerKey]
        let l = 0 ;
        let r = i - 1;
        let ans = -1;
        // [1, 3,4]
        //  l    r
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            if (keys[mid] <= powerKey - 3) {
                ans = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        if (ans >= 0) {
            maxPower += dp[ans]
        }
        dp[i] = Math.max(dp[i - 1], maxPower)
    }
    return dp[N - 1]
};