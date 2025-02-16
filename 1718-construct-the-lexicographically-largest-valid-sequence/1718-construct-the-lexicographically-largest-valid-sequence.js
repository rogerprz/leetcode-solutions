/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function(n) {
    let res = new Array(2 * n - 1).fill(0)
    
    const set = new Set();

    function backtrack(i) {
        if (i === res.length) {
            return true 
        }
        if (res[i]) {
            return backtrack(i + 1)
        }

        for (let j = n; j >= 0; j--) {
            if (set.has(j)) {
                continue
            }
            set.add(j)
            res[i] = j; 
            if (j=== 1) {
                if (backtrack(i+1)) {
                    return true
                }
            } else if (j + i < res.length && res[i+j] === 0) {
                res[i+j] = j 
                if (backtrack(i + 1)) {
                    return true
                }
                res[i+j] = 0;
            }
            res[i] = 0
            set.delete(j)
        }
        return false
    }
    backtrack(0)
    return res 
};