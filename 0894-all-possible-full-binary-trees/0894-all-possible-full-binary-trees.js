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
    if (n % 2 === 0) return []

    const memo = {}

    return buildTrees(n, memo)
};

function buildTrees(n, memo) {
    if (n === 1) {
        return [new TreeNode(0)]
    }

    if (n in memo) {
        return memo[n]
    }
    const trees = []
/**
    n = 5
    memo = {}
    trees
    bTree: lT = [0] 
                    [0]
    bTree: rT =     [0]
 */
    for (let left = 1; left < n; left +=2) {
        // right = 3
        const right = n - left - 1
        // lT = [0]
        const leftTrees = buildTrees(left, memo)
        // rT = 
        const rightTrees = buildTrees(right, memo)

        for (let l of leftTrees) {
            for (const r of rightTrees) {
                const root = new TreeNode(0, l, r)
                trees.push(root)
            }
        }

    }
    memo[n] = trees;

    return trees
}