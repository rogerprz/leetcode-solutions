/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    if (arr.length < 3) return 0;
    const N = arr.length -1;

    let start= 0;
    let res = 0; 

    while (start < N) {
        let end = start;

        if (end < N && arr[end] < arr[end+1]) {
            while (end < N && arr[end] < arr[end+1]) {
                end++
            }

            if (end < N && arr[end] > arr[end+1]) {
                while (end < N && arr[end] > arr[end+1]) {
                    end++
                }
                res = Math.max(res, end - start + 1) 
            }
        }
        start = Math.max(end, start + 1)
    }
    return res;
};