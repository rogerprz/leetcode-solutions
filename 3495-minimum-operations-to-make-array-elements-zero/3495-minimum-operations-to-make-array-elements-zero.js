/**
 * @param {number[][]} queries
 * @return {number}
 */

var minOperations = function(queries) {
    let limits = [1];
    while (limits[limits.length - 1] <= 1e9) {
        limits.push(limits[limits.length - 1] * 4);
    }
    
    let totalOps = 0;
    
    for (let [l, r] of queries) {
        let sumSteps = 0;
        for (let k = 1; k < limits.length; k++) {
            let start = limits[k - 1];
            let end = limits[k] - 1;
            
            if (r < start || l > end) continue;
            
            let overlapL = Math.max(l, start);
            let overlapR = Math.min(r, end);
            
            let count = overlapR - overlapL + 1;
            if (count > 0) sumSteps += count * k;
        }
        
        totalOps += Math.ceil(sumSteps / 2);
    }
    
    return totalOps;
};