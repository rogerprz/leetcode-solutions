/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
    let map = new Map();
    events.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

    function find(day) {
        if (!map.has(day)) map.set(day, day);
        if (map.get(day) !== day) map.set(day, find(map.get(day)));
        return map.get(day);
    }
    let count = 0;
    for (let [start, end] of events) {
        let day = find(start);
        if (day <= end) {
            count++;
            map.set(day, day + 1);
        }
    }
    return count;
};