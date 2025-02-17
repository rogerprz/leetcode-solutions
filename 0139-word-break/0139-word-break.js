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
        // Remove the start of queue
        const start = queue.shift()
        // if start is == to len then we are done, return true
        // this is the end, base end case
        if (start === s.length) return true;
        // we then loop by checking the end of this subtring
        // we set start + 1 to end, and go as far as s.len
        for (let end = start + 1; end <= s.length; end++) {
            // if we've seen end, we continue,
            // First loop: le in leetcode, we haven't
            if (seen.has(end)) continue;
            // we get the substring we need to check
            const subStr = s.substring(start,end)
            // Check if subStr is in words, else we increase end to do 
            // another check
            if (words.has(subStr)) {
                // if true, then we push end index
                // this way we can start checking this in the next while
                queue.push(end);
                // we also note that we've seen this index as to not 
                // test again.
                seen.add(end)
            }
        }

    }
    return false
};