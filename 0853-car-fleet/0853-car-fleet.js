/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const arr = new Array(target).fill(0);
    for (let i = 0; i < position.length; i++) {
        arr[position[i]] = (target - position[i]) / speed[i];
    }
    let fleets = 0, prev = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] <= prev) continue;
        fleets++;
        prev = arr[i];
    }
    return fleets;
}