/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    let odd = 0;
    let sum = 0;
    let even = 0;

    for (const num of arr) {
        sum += num
        const oddRes = sum % 2 === 1
        if (oddRes) {
            odd++
        } else {
            even++
        }
    }
    const multiplyNums = odd * even
    
    return (multiplyNums + odd) % (1e9+7)
};