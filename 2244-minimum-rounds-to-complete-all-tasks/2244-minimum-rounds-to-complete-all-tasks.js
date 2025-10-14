/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const freq = new Map
    for (const task of tasks) {
         freq.set(task, (freq.get(task) || 0) + 1)
    }

    let rounds = 0; // 3
    for (const taskCount of freq.values()) {
        if (taskCount === 1) return -1
        rounds += Math.floor((taskCount + 2) / 3)
    }
    
    return rounds;
};