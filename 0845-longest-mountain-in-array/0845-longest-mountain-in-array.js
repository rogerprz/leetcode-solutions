/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    if (arr.length < 3) return 0;
    // [2,1,4,7,3,2,5]
    let base = 0;
    let ans = 0; 
    const N = arr.length - 1
    
    while (base < N) {
        let end = base;
        if (end + 1 < N && arr[end] < arr[end + 1]) {
            while (end < N && arr[end] < arr[end + 1]) {
                end++
            }

            if ( end < N && arr[end] > arr[end + 1]) {
                while (end < N && arr[end] > arr[end +1]) {
                    end++
                }
                ans = Math.max(ans, end - base + 1)
            }
        }
        base = Math.max(end, base + 1)
    }

    return ans
};