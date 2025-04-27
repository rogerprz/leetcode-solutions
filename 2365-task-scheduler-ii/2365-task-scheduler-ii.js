/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
var taskSchedulerII = function(tasks, space) {
    const hash = {}
    // 1 : i0+3 -> i2:1 + 3
    // 2: i1+3
    let days = 0; // 4
    // [1,2,1,2,3,1]
    //  0,1,2,3,4,5

    for (let i = 0; i < tasks.length;i++) {
        const task = tasks[i];
        if (!(task in hash)) {
            hash[task] = i + space
            days++
        } else {
            // 3 > 2
            if (hash[task] >= i) {
                // 3 - 2 + 1
                days += hash[task] - i + 1
                hash[task] = hash[task] - i + space
            } else {
                days++
                hash[task] = i + space
            }
        }
    }
    return days +1
};