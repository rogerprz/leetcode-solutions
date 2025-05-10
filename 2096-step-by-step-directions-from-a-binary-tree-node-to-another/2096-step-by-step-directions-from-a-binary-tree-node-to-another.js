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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    function getPath(node, val, path) {
        if (!node) return false;
        if (node.val === val) return true;
        path.push('L');
        if (getPath(node.left, val, path)) return true;
        path.pop();
        path.push('R');
        if (getPath(node.right, val, path)) return true;
        path.pop();
        return false;
    }
    let path1 = [], path2 = [];
    getPath(root, startValue, path1);
    getPath(root, destValue, path2);
    let i = 0;
    while (i < path1.length && i < path2.length && path1[i] === path2[i]) i++;
    return 'U'.repeat(path1.length - i) + path2.slice(i).join('');
};