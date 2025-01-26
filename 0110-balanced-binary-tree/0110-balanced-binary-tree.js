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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true

    const checkHeight = (node) => {
        // base case is if node is null then we return 0
        if (!node) return 0
        
        const leftHeight = checkHeight(node.left)
        const rightHeight = checkHeight(node.right)
        
        if (rightHeight === -1 || leftHeight === -1) return -1

        if (Math.abs(leftHeight - rightHeight) > 1) return -1

        return Math.max(leftHeight, rightHeight) + 1
    }

    return checkHeight(root) !== -1
 };

 /**
 var isBalanced = function(root) {
    if (!root) return !root

    const height = (root) => {
        if (!root) return -1 

        return 1 + Math.max(height(root.left), height( root.right))
    }

    return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right)
 };
  */