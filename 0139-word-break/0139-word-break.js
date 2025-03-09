/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length).fill(false)

    for (let i = 0; i < s.length;i++) {
        for (const word of wordDict) {
            const size = word.length;
            if (i === size - 1 || dp[i - size]){
                const subString = s.substring(i - size + 1, i + 1)
                if (subString === word) {
                    dp[i] = true
                }
            }
        }
    }
    return dp[dp.length-1]
};