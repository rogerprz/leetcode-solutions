/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    let count = 0;

    while (n != 0) {
        if (n % 2 === 1) {
            count++
            if (n === 1 || (n & 2) === 0) n--
            else n++
        } else {
            n = n / 2
        }
    } 
    return count
};