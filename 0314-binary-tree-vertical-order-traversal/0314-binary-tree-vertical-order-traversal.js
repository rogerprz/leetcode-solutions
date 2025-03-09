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
    const hash = {}
    while (stack.length > 0) {
        const [node, index] = stack.shift()

        if (!(index in hash)) {
            hash[index] = []
        }
        hash[index].push(node.val)

        if (node.left) {
            stack.push([node.left, index - 1])
        }
        if (node.right) {
            stack.push([node.right, index + 1])
        }
    }
    const array = Object.entries(hash).sort((a,b) => a[0] - b[0]).map(([key,value]) => value)

    return array
};