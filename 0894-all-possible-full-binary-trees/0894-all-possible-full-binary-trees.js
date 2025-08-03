/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    if (n % 2 == 0) return []
    const memo = {}
    
    return buildFBT(n,  memo)
}

function buildFBT(n, memo) {
    // n = 7
    if (n === 1) {
        return [new TreeNode(0)]
    }
    /* 
        memo = {}

    */
    if (memo[n]) {
        return memo[n]
    }
    /**
    
     */
    const trees = [];

    for (let left = 1; left < n; left +=2) {
        let right = n - left - 1;
        const leftTrees = buildFBT(left, memo)
        const rightTrees = buildFBT(right, memo)

        for (const l of leftTrees) {
            for (const r of rightTrees) {
                const root = new TreeNode(0, l, r)
                trees.push(root)
            }
        }
    }

    memo[n] = trees;
    return trees
}