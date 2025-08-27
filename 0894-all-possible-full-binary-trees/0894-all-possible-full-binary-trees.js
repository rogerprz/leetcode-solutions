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

    return buildTrees(n, {})
};

function buildTrees(n, memo ) {
    if (n === 1) {
        return [new TreeNode(0)]
    }

    if (n in memo) return memo[n]
    const trees = []

    for (let left = 1; left < n; left+=2) {
        const right = n - 1 - left

        const leftTrees = buildTrees(left, memo)
        const rightTrees = buildTrees(right, memo)

        for (const l of leftTrees) {
            for (const r of rightTrees) {
                const root = new TreeNode(0,l,r)

                trees.push(root)
            }
        }
    }

    memo[n] = trees;
    return trees
}