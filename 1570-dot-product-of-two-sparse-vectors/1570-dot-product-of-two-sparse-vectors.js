/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.nums = nums
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let prod = 0;
    const nums2 = vec.nums
    for (let i = 0; i < this.nums.length; i++) {
        const num = this.nums[i] || 0 
        const num2 = nums2[i] || 0
        prod += num * num2
    }
    return prod
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);