/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const dp = new Array(text1.length).fill(0)
    let max = 0;
    for (const topChar of text2) {
        let currMax = 0;
        for (let i = 0; i < text1.length;i++) {
            const currChar = text1[i]
            if (currMax < dp[i]) {
                currMax = dp[i]
            }
            else if (topChar === currChar) {
                dp[i] = currMax+ 1
                max = Math.max(max, dp[i])
            } 
        }
    }
    return max
};