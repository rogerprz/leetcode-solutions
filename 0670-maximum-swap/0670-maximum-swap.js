/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    const arr = num.toString().split('');

    const digits = new Array(10).fill(-1)
    //  2 7 3 6
    // [-1,-1, 0, 2, -1,-1,3, 1]
    for (let i = 0; i < arr.length;i++) {
        const n = parseInt(arr[i])
        digits[n] = i // 0 , 1, 2
    }

    for (let i = 0; i < arr.length; i++) {
        for (let d = 9; d > arr[i]; d--) {
            const numIdx = digits[d]
            if (numIdx > i) {
                [arr[i], arr[numIdx]] = [arr[numIdx], arr[i]]
                return parseInt(arr.join(''))
            }
        }
    }
    return num
};