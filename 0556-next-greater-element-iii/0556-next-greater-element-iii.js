/**
 * @param {number} n
 * @return {number}
 */
function nextGreaterElement(n) {
    const digits = n.toString().split('').map(Number);
    const len = digits.length;
    // Find pivot
    let pivot = -1;
    for (let i = len - 2; i >= 0; i--) {
        if (digits[i] < digits[i + 1]) {
            pivot = i;
            break;
        }
    }
    
    if (pivot === -1) return -1;
    // Find successor
    for (let i = len - 1; i > pivot; i--) {
        if (digits[i] > digits[pivot]) {
            [digits[pivot], digits[i]] = [digits[i], digits[pivot]];
            break;
        }
    }
    // Two-pointer reverse suffix
    let left = pivot + 1, right = len - 1;
    while (left < right) {
        [digits[left], digits[right]] = [digits[right], digits[left]];
        left++;
        right--;
    }
    
    const result = parseInt(digits.join(''));
    return result > 2147483647 ? -1 : result;
}