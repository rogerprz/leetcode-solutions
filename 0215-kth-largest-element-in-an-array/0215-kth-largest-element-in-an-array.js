/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const min = Math.min(...nums)
    const max = Math.max(...nums)
    // 1 
    // 6
    // [3,2,1,5,6,4]        7 + 1
    const freq = new Array(max - min + 1).fill(0)

    for (let i = 0; i < nums.length;i++) {
        const num = nums[i]
        const total = num  - min
        freq[total]++
    }
    console.log("F:", freq)
    for (let i = freq.length - 1; i >=0;i--) {
        const count = freq[i]
        if (count === 0) continue 
        // [1, 1, 1, 1, 1, 1, 0]
        //  0 ,1, 2, 3, 4, 5, 6
        k -= count

        if (k <= 0) {
            return i + min
        }
    }
};