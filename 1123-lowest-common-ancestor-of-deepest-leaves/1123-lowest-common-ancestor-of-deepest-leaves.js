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
    let max = 0;
    let lca = null;
    const explore = (node, level = 0) => {
        if (!node) return level - 1;

        const leftDepth = explore(node.left, level + 1)
        const rightDepth = explore(node.right, level + 1)


        if (level > max) {
            max = level
        } 
        
        if (leftDepth === rightDepth && leftDepth === max) {
            lca = node;
        } 
        
        return Math.max(leftDepth, rightDepth)
    }
    explore(root, 0)
    return lca
};