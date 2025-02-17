/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const dp = new Array(s.length).fill(false);

    for (let i = 0; i < s.length; i++) {
        for (const word of wordDict) {
            const len = word.length
            if (i === len - 1 || dp[i - len]) {
                const subStr = s.substring(i - len + 1, i + 1)
                if (subStr == word) {
                    dp[i] = true;
                    break;
                }
            }
        }
    }
    return dp[s.length - 1];
};