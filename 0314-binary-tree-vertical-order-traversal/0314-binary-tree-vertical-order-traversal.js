/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    if (!root) return []

    const stack = [[root, 0]]
    const columns = new Map()
    let min = 0
    let max = 0
    while (stack.length > 0) {
        const [node, index] = stack.shift()

        min = Math.min(min, index)
        max = Math.max(max, index)
        if (!(columns.has(index))) {
            columns.set(index, [])
        }
        columns.get(index).push(node.val)

        if (node.left) {
            stack.push([node.left, index - 1])
        }
        if (node.right) {
            stack.push([node.right, index + 1])
        }
    }
    const result = []
    for (let i = min; i<= max;i++) {
        result.push(columns.get(i))
    }
    return result
};