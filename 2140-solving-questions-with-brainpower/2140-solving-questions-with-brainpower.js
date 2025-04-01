/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    const dp = new Array(questions.length + 1).fill(0)
    //  [0, 4, 4, 2, 4]
    //   0,1,2,3
    // [[3,2],[4,3],[4,4],[2,5]]
    const N = questions.length;

    for (let i = N - 1; i >= 0;i--) {
        const [points, skip] = questions[i]

        const skipPoints = dp[i + 1];
    
        const nextQuestion = i + skip + 1;
        const solvePoints = points + (nextQuestion < N ? dp[nextQuestion] : 0);
        
        // Take the maximum of the two options
        dp[i] = Math.max(skipPoints, solvePoints);
    }
    return dp[0]
};