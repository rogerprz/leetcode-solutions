/**
 * @psrsm {number[]} s
 * @psrsm {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    nums.sort((a, b) => b- a)
    let arr = [], operTime = 0, arrPos = 0
    while((nums.length > 0 && nums[nums.length-1] < k) || (arr.length > 0 && arr[arrPos] < k)) {
        let min1, min2
        if(nums[nums.length-1] && !(nums[nums.length-1] > arr[arrPos])) min1 = nums.pop()
        else { 
            min1 = arr[arrPos]
            arrPos ++
        }
        if(nums[nums.length-1] && !(nums[nums.length-1] > arr[arrPos])) min2 = nums.pop()
        else { 
            min2 = arr[arrPos]
            arrPos ++
        }
        arr.push(min1*2 + min2)
        operTime ++
    }
    return operTime
};