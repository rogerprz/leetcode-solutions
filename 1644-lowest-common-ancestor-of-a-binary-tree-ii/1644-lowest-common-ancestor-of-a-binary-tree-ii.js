/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // Variables to check if both nodes are found
    let pFound = false;
    let qFound = false;

    // Helper function for DFS traversal
    function dfs(node) {
        if (!node) {
            return null;
        }

        // Traverse the left and right subtree
        let left = dfs(node.left);
        let right = dfs(node.right);

        // If current node is p or q
        if (node === p) {
            pFound = true;
            return node;
        }
        if (node === q) {
            qFound = true;
            return node;
        }

        // If both left and right are not null, current node is the LCA
        if (left && right) {
            return node;
        }

        // Return non-null value
        return left || right;
    }

    // Call dfs and get the result
    let lca = dfs(root);

    // Return LCA only if both nodes were found
    if (pFound && qFound) {
        return lca;
    } else {
        return null;
    }
};