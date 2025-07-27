/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(t1, t2) {
    const l1 = t1.length
    const l2 = t2.length;

    const dp = new Array(l1 + 1)
            .fill()
            .map(()=> new Array(l2 +1)
            .fill(0))
           
    console.log('DP:', dp)
    for (let row = 1; row <= l1;row++) {
        const firstChar = t1[row-1]
        for (let col = 1; col<=l2;col++) {
            const secChar = t2[col-1]

            if (firstChar === secChar) {
                dp[row][col] = dp[row-1][col-1] + 1
            } else {
                dp[row][col] = Math.max(dp[row-1][col], dp[row][col-1])
            }
        }
    }
    console.log('DP:', dp)
    return dp[l1][l2]
};