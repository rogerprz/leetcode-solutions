/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const set = new Set()

    let index = 0
    // set = 7, 5, 3 
    //  [1,2,3,4,2,3,3,5,7]
    //  [4,5,6,4,4]
    //  [6,7,8,9]
    //.  0,1,2,3,4,5,6,7,8
    //             i
    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i]
        if (set.has(num)) {
            index = i + 1
            break;
        }
        set.add(num)
    }
    // 6 / 3 = 2 
    // 4/ 3 = 2
    if (index === 0) {
        return index
    }
    return Math.ceil(index/3)
};