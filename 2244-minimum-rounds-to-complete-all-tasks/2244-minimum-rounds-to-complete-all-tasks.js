/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const freq = new Map
    const nums = new Set()
    // [2,2,3,3,2,4,4,4,4,4]
    /**
        2: 0
        3: 0
        4: 0
     */
    for (const task of tasks) {
         freq.set(task, (freq.get(task) || 0) + 1)
    }

    let rounds = 0; // 3
    for (const val of freq.values()) {
        if (val === 1) return -1
        rounds += Math.floor((val + 2) / 3)
    }
    
    return rounds;
};