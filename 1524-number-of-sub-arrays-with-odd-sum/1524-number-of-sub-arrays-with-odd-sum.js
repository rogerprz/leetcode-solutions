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
        odd += sum % 2 === 1
        even += sum % 2 === 0
    }
    
    return(odd * even + odd) % (1e9+7)
};