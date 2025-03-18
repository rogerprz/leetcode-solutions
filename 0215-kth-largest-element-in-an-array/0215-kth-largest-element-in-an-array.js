/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const min = Math.min(...nums)
    const max = Math.max(...nums)

    const freq = new Array(max - min + 1).fill(0)
    for (let i = 0; i < nums.length;i++) {
        // [0,0,0,0,0,0,0,0,0,0,0]
        //  5,4,3,2,1,0,1,2,3,4,5
        const idx = nums[i] - min 
        freq[idx]++
    }
    for (let i = freq.length - 1; i >=0; i--) {
        k -= freq[i]
        freq[i] = 0;
        if (k <= 0) {
            return i + min
        }
    }

};