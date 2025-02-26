/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function(arr) {
    let odd = 0;
    let sum = 0;
    let even = 0;

    for(let i = 0;i < arr.length;i++) {
         sum += arr[i]
         odd += Number(sum % 2 === 1)
         even += Number(sum % 2 === 0)   
        }
    return(odd * even + odd) % (1e9+7)
};