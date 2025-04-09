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
    if (!root) return root; 

    let maxDepth = 0; 
    let lca = null;
    const dfs = (node, depth) => {
        if (!node) return depth - 1

        const leftDepth = dfs(node.left, depth + 1);
        const rightDepth = dfs(node.right, depth + 1);

        if (depth > maxDepth) {
            maxDepth = depth
        } 

        if (leftDepth === rightDepth && leftDepth === maxDepth) {
            lca = node
        }

        return Math.max(leftDepth, rightDepth)
    }

    dfs(root, 0)
    return lca
};