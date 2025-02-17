/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, total) {
    const res = []
    
    function backtrack(arr, start, sum) {
        if (sum > total) {
            return 
        }
        if (arr.length === k) {
            if (sum=== total) {
                res.push([...arr])
            }
            return 
        }

        for (let i = start; i < 10; i++) {
            arr.push(i)
            const newSum = sum + i
            const newStart = i + 1
            backtrack(arr, newStart, newSum)
            arr.pop()
        }
    }
    backtrack([], 1, 0)
    return res
    
};
/**

function backtrack(arr, sum, start) {
        if (sum > total) {
            return;
        }
        
        if (arr.length === k) {
            if (sum === total) {
                res.push(arr);
            }
            return;
        }
        
        for(let i = start;  < 10; i++) {
            const newArr = [...arr, i]
            const newSum = sum + i;
            backtrack(newArr, newSum, i+1);
        }
    }
    backtrack([], 0, 1);
    return res;
var combinationSum3 = function(k, total) {
    const res = [];

    function backtrack(arr, sum, start) {
        if (sum > total) return; // Prune invalid paths early
        if (arr.length === k) {
            if (sum === total) res.push([...arr]);
            return;
        }

        for (let i = start; i < 10; i++) {
            arr.push(i); // Choose
            backtrack(arr, sum + i, i + 1); // Explore
            arr.pop(); // Unchoose (backtrack)
        }
    }

    backtrack([], 0, 1);
    return res;
};

 */