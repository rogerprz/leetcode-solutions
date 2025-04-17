/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const N = tasks.length;

    const freq = new Array(26).fill(0)

    for (const char of tasks) {
        freq[char.charCodeAt(0) - "A".charCodeAt(0)]++
    }
    freq.sort((a,b) => b - a)
    const chunk = freq[0] - 1
    let idle = chunk * n 

    for (let i = 1; i < 26; i++) {
        idle -= Math.min(chunk, freq[i])
    }

    return idle < 0 ? N : N + idle
};