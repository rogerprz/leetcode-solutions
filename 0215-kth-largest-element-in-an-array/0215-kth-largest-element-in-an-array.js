/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const max = Math.max(...nums)
    const min = Math.min(...nums)
    const array = new Array(max-min+1).fill(0)

    for (const num of nums) {
        const idx = num - min
        array[idx]++
    }

    for (let i = array.length-1; i>=0; i--) {
        if (array[i] > 0) {
            k -= array[i]
            array[i] = 0
        }
        // while (array[i] > 0){
        //     array[i]--
        //     k--
        // }
        if (k <=0) return i + min
    }
};