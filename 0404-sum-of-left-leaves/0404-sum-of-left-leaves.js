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
var sumOfLeftLeaves = function(root, sum = 0, isLeft = false) {
    if (!root) return sum

    if (isLeft && !root.left && !root.right) {
        return root.val + sum
    }
    if (root.left) {
        sum = sumOfLeftLeaves(root.left, sum, true)
    }

    if (root.right) {
        sum = sumOfLeftLeaves(root.right, sum)
    }
    return sum
};