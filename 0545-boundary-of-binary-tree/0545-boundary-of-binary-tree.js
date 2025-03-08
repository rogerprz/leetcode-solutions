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

    const leftBorder = (node, result) =>{
        while (node) {
            if (node.left || node.right) result.push(node.val) 
            node = node.left || node.right
        }
    }
    const bottomBorder = (node, result) =>{
    if (!node) return 
    if (!node.left && !node.right) { 
        result.push(node.val) 
        return
        }
    bottomBorder(node.left, result) 
    bottomBorder(node.right, result) 
    }

    const rightBorder = (node, result) =>{
    let stack = []
    while (node) {
        if (node.left || node.right) stack.push(node.val) 
        node= node.right || node.left
    }
    while (stack.length>0) {
        result.push(stack.pop() ) 
    }
    }

    const result = []

    if (root.left || root.right) result.push(root.val) 

    leftBorder(root.left, result) 

    bottomBorder(root, result) 
    rightBorder(root.right, result) 

    return result
};
