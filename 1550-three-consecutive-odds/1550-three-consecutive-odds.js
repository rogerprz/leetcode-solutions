/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        const [curr, sec, third] = [arr[i], arr[i+1], arr[i+2]]
        if (curr % 2 === 1 && sec % 2 === 1 && third % 2 === 1) {
            return true
        }
    }
    return false
};