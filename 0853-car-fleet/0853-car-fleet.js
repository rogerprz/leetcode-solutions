/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const arr = new Array(target).fill(0);
    
    for (let i = 0; i < position.length; i++) {
        const pos = position[i]
        const time = (target - pos) / speed[i]
        arr[pos] = time;
    }
    let fleets = 0, prev = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        const curr = arr[i]

        if (curr > prev){
            fleets++;
            prev = curr;
        }
    }
    return fleets;
}