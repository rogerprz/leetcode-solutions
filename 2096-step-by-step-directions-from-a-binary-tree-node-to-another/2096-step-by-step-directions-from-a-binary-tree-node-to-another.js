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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    const lca = findLCA(root, startValue, destValue)
    const depth = findDepth(lca, startValue)
    const path = findPath(lca, destValue)

    return "U".repeat(depth).concat(path)
};

function findLCA(node, s, d) {
    if (!node) return null;

    if (node.val === s || node.val === d) return node

    const left = findLCA(node.left, s, d)
    const right = findLCA(node.right, s, d)

    if (left && right) {
        return node
    }
    return left || right
}

function findDepth(node, val, count = 0) {
    if (!node) return 0;
    if (node.val === val) return count

    return findDepth(node.left, val, count + 1) ||
        findDepth(node.right, val, count + 1)
}

function findPath(root, val, str = "") {
    if (!root) return ''
    if (root.val === val) return str 

    return findPath(root.left, val, str + 'L') ||
            findPath(root.right, val, str + 'R')
}