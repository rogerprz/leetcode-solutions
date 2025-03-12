/**
 * Definition for a binary tree node.
 * function TreeNode (val, left, right)  {
 *     this.val = (val===undefined ? 0 : val) 
 *     this.left = (left===undefined ? null : left) 
 *     this.right = (right===undefined ? null : right) 
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var boundaryOfBinaryTree = function(root)  {
    if (!root) return null
    const result = []

    const leftBorder = (node) => {
        while (node) {
            if (node.left || node.right) result.push(node.val) 
            node = node.left || node.right
        }
    }
    const bottomBorder = (node) => {
    if (!node) return 
    if (!node.left && !node.right) { 
        result.push(node.val) 
        return
        }
    bottomBorder(node.left) 
    bottomBorder(node.right) 
    }

    const rightBorder = (node) => {
        const stack = []
        while (node) {
            if (node.left || node.right) stack.push(node.val) 
            node = node.right || node.left
        }
        while (stack.length > 0) {
            result.push(stack.pop() ) 
        }
    }


    if (root.left || root.right) result.push(root.val) 

    leftBorder(root.left) 
    bottomBorder(root) 
    rightBorder(root.right) 

    return result
};
