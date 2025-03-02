/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length).fill(false)
    // [l,e,e, c,o,]
    //    i
    // [lee, co]
    for (let i = 0; i < s.length; i++) {
        for (const word of wordDict) {
            const size = word.length;

            if (i === size - 1 || dp[i - size]) {
                const subWord = s.substring(i - size + 1, i + 1)
                if (subWord === word) {
                    dp[i] = true 
                    break;
                }
            }
        }
    }
    return dp[s.length - 1]
};