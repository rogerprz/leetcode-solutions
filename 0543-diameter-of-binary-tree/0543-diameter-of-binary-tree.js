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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (!root) return 0;

    let max = 0;
    let nodeToDepth = new Map(); // Stores computed depths of nodes
    let stack = [[root, false]]; // [node, visited]

    while (stack.length) {
        let [node, visited] = stack.pop();

        if (!node) continue;

        if (visited) {
            // Process node after visiting children (Postorder)
            let leftDepth = nodeToDepth.get(node.left) || 0;
            let rightDepth = nodeToDepth.get(node.right) || 0;

            max = Math.max(max, leftDepth + rightDepth); // Update diameter

            nodeToDepth.set(node, 1 + Math.max(leftDepth, rightDepth)); // Store depth
        } else {
            // Postorder: Push current node back after pushing children
            stack.push([node, true]); // Push current node as visited
            stack.push([node.right, false]); // Push right child
            stack.push([node.left, false]); // Push left child
        }
    }

    return max;
};