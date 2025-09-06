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

    const res = [];
    if (root.left || root.right) res.push(root.val)
    if (root.left) res.push(...leftBorder(root.left))
    res.push(...bottomBorder(root))
    if (root.right) res.push(...rightBorder(root.right))
    return res
};

function leftBorder(node) {
    const res = [];

    while (node) {
        if (node.left || node.right) {
            res.push(node.val)
        }
        node = node.left || node.right
    }

    return res
}

function bottomBorder(node, res = []) {
    if (!node) return node;

    if (!node.left && !node.right) {
        res.push(node.val)
        return res
    }
    bottomBorder(node.left, res)
    bottomBorder(node.right, res)

    return res
}

function rightBorder(node) {
    const stack = [];
    while (node) {
        if (node.left || node.right) {
            stack.push(node.val)
        }
        node = node.right || node.left
    }
    return stack.reverse();
}