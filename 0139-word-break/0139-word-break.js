/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const words = new Set(wordDict)
    const queue = [0];
    const seen = new Set()
    while (queue.length > 0) {
        const start = queue.shift()

        if (start === s.length) return true;
        
        for (let end = start + 1; end <= s.length; end++) {
            if (seen.has(end)) continue;

            if (words.has(s.substring(start,end))) {
                queue.push(end);
                seen.add(end)
            }
        }

    }
    return false
};