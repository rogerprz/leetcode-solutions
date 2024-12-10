/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    // NOT MY SOLUTION
    const pre = new Array(nums.length + 1).fill(0);
    /**
    pre = [0,0,0,0]     [1,0,0,-1]
    nums = [1,0,1]       
    queries = [[0,2]]   0
     */
    for (const query of queries) {
        pre[query[0]]++
        if (query[1] + 1 < pre.length) {
            pre[query[1] + 1]--;
        }
    }
    /**
        pre = [1,1,1,0]
     */
    for (let i = 1; i < pre.length; i++) {
        pre[i] += pre[i-1];
    }
     /**
        pre = [1,1,1,0]     1 1 1
        nums = [1,0,1]      1 0 1
     */
    for (let i = 0; i < nums.length; i++) {
        if (pre[i] < nums[i]) {
            return false;
        }
    }

    return true;
};