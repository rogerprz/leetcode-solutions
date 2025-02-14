/**
 * @psrsm {number[]} s
 * @psrsm {number} k
 * @return {number}
 */
const minOperations = (nums, k) => {
    nums.sort((x, y) => x - y);

    for (let i = 0, j = 0, count = 0, x, y; ;++count) {

        if (i < nums.length && (j >= count || nums[i] <= nums[j])) {
            x = nums[i++];
        }
        else {
            x = nums[j++];
        }

        if (x >= k) return count;

        if (i < nums.length && (j >= count || nums[i] <= nums[j])) {
            y = nums[i++];
        }
        else {
            y = nums[j++];
        }
        nums[count] = x * 2 + y;
    }
    return -1;
};