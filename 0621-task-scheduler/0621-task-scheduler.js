/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const freq = new Array(26).fill(0);
    const tLen = tasks.length;
    for (const task of tasks) {
        const idx = task.charCodeAt(0) - 'A'.charCodeAt(0);
        freq[idx]++
    }
    freq.sort((a,b) => b-a)
    const chunk = freq[0] - 1
    let idle = chunk * n

    for (let i = 1; i < freq.length;i++) {
        idle -= Math.min(chunk, freq[i])
    }
    
    return idle < 0 ? tLen : tLen + idle
};