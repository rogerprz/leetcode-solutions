/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const min = Math.min(...nums)
    const max = Math.max(...nums)

    const arr = Array.from({length: max - min + 1}, ()=> 0)

    for (let i = 0; i < nums.length; i++) {
        const idx = nums[i] - min 
        arr[idx]++
    }

    for (let i = arr.length - 1; i >=0; i--) {
        if (arr[i] >  0) {
            k -= arr[i]
            arr[i] = 0;
        }
        if (k <= 0) {
            return i + min
        }
    }
};