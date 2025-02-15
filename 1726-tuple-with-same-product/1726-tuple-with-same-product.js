/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    let products = new Map();
    let result = 0;

    for (let i = 0; i< nums.length;i++) {
        const outer = nums[i]
        
        for (let j = i + 1; j < nums.length; j++) {
            let inner = nums[j]
            const total = outer * inner; 

            const prev = products.get(total) || 0
            result += 8 * prev
            products.set(total, prev + 1)
        }
    }

    return result
};
