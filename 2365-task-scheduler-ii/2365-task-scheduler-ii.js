/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
var taskSchedulerII = function(tasks, space) {
    const map = {}
    let days = 0;
    for (const task of tasks) {
        if (task in map) {
            days = Math.max(days, map[task])
        }
        map[task] = days + space + 1;
        days++
    }
    return days;
};