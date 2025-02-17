/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) { 
    const min = Math.min(...nums)
    const max = Math.max(...nums)

    const array =  Array.from({length: max - min + 1}, ()=> 0)
    for (const num of nums) {
        const idx = num - min
        array[idx]++
    }
    /**
          [3,2,1,5,6,4]
        [0,1,1,1,1,1,1]
        k = 2
     */
    for (let i = array.length - 1; i >=0;i--) {
        if  (array[i] > 0) {
            k-= array[i]
            array[i] = 0
        }
        if (k <= 0) {
            return i + min 
        }
    }
};