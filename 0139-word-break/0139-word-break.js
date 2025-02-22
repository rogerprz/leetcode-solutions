/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const dp = new Array(s.length).fill(false);
    let min = Infinity;
    wordDict.forEach((word) => min = Math.min(min, word.length))
    for (let i = 0; i < s.length; i++) {
        for (const word of wordDict) {
            const len = word.length
            // We loop through the inner wordDic for each word
            // to see if it's in the current length
            // if we don't find it then we increase the i length 
            // two conditions we check,
            // 1. if i == end of the word, i.e i = 0, word is 'a'
            // 2. if the prev location is true, this adds on
            if (i === len - 1 || dp[i - len]) {
                const subStr = s.substring(i - len + 1, i + 1)
                if (subStr === word) {
                    dp[i] = true;
                    break;
                }
            }
        }
    }
    return dp[s.length - 1];
};

/**

const len = word.length
            if (i === len - 1 || dp[i - len]) {
                const subStr = s.substring(i - len + 1, i + 1)
                if (subStr == word) {
                    dp[i] = true;
                    break;
                }
            }
             */