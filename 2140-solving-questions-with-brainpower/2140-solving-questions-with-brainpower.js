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

        // Option 1: Skip this question
        const skipPoints = dp[i + 1];
        // Option 2: Solve this question
        // If solving puts us beyond the array, we just get the points
        // Otherwise, we add the maximum possible points from where we can resume
        const prevQuestion = i + skip + 1;
        const prevPoints = (prevQuestion < N ? dp[prevQuestion] : 0)
        const solvePoints = points + prevPoints;
        
        // Take the maximum of the two options
        dp[i] = Math.max(skipPoints, solvePoints);
    }
    
    return dp[0];
};