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
 * @return {number[]}
 */
var boundaryOfBinaryTree = function(root) {
    if (!root) return root;
    let res = [];

    const leftBorder = (node) => {
        while (node) {
            if (node.left || node.right) {
                res.push(node.val)
            }
            node = node.left || node.right
        }
    }
    const bottomBorder = (node) => {
        if (!node) return node;

        if (!node.left && !node.right) {
            res.push(node.val)
            return
        }
        bottomBorder(node.left)
        bottomBorder(node.right)
    }
    const rightBorder = (node) => {
        const stack = []

        while (node) {
            if (node.left || node.right) {
                stack.push(node.val)
            }
            node = node.right || node.left;
        }
        while (stack.length > 0) {
            res.push(stack.pop())
        }
    }


    if (root.left || root.right) res.push(root.val)

    leftBorder(root.left)
    bottomBorder(root)
    rightBorder(root.right)
    return res
};