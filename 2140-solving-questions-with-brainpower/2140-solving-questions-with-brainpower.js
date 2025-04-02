/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    const dp = new Array(questions.length + 1).fill(0)
    const N = questions.length;
    //       0,    1,    2,    3,    4
    //   [[1,1],[2,2],[3,3],[4,4],[5,5]]
    // dp = [0,    0,    0,    0,    0,  0]
    for (let i = N - 1; i >= 0; i--) {
        const [points, skip] = questions[i]

        const skipped = dp[i + 1];
        const prev = i + skip + 1

        const prevPoints = prev < N ? dp[prev] : 0
        const totalPoints = points + prevPoints
        dp[i] = Math.max(skipped, totalPoints)
    }
    return dp[0]
};