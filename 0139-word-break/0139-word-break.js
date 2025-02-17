/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let dp = new Array(s.length).fill(false);
    for (let i = 0; i < s.length; i++) {
        for (let word of wordDict) {
            const len = word.length
            // Handle out of bounds case
            if (i < word.length - 1) {
                continue;
            }
            if (i == len - 1 || dp[i - len]) {
                if (s.substring(i - len + 1, i + 1) == word) {
                    dp[i] = true;
                    break;
                }
            }
        }
    }
    return dp[s.length - 1];
};