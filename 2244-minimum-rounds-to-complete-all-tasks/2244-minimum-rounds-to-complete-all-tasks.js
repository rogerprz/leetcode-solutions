/**
 * @param {number[]} tasks
 * @return {number}
 */
/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const freq = {}
    const keys = new Set()
    // [2,2,3,3,2,4,4,4,4,4]
    /**
        2: 0
        3: 0
        4: 0
     */
    for (const task of tasks) {
        if (!(task in freq)) {
            freq[task] = 0
            keys.add(task)
        }
        freq[task]++
    }

    let rounds = 0; // 3

   for (const key in freq) {
    const count = freq[key];
    if (count === 1) return -1; // cannot complete
    rounds += Math.ceil(count / 3);
  }
    return rounds;
};