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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    if (!root) return root
    let lca = null;
    let maxDepth = 0
    const traverse = (node, depth) => {
        if (!node) return depth

        depth++
        const leftDepth = traverse(node.left, depth)
        const rightDepth = traverse(node.right, depth)

        maxDepth = Math.max(depth, maxDepth)

        if (leftDepth === rightDepth && leftDepth === maxDepth) {
            lca = node
        }

        return Math.max(leftDepth, rightDepth)
    }
    traverse(root, 0)
    return lca
};