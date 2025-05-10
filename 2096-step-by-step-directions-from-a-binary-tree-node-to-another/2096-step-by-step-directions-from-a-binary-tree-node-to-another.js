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
    // find the least common ancestor LCA
    const lca = findLCA(root, startValue, destValue)
    const depth = findDepth(lca, startValue)
    const path = findPath(lca, destValue)

    return "U".repeat(depth).concat(path)
};

function findLCA(node, s, d) {
    if (!node) return null;
    if (node.val === s || node.val === d) return node

    const left = findLCA(node.left, s, d)
    const right = findLCA(node.right, s, d)

    if (left && right) return node

    return left || right
}

function findDepth(node, start, count = 0) {
    if (!node) return 0;
    if (node.val === start) return count;
    count++
    const left = findDepth(node.left, start, count)
    const right = findDepth(node.right, start, count)
    return left || right;
}

function findPath(node, dest, str = "") {
  if (!node) return '';
  if (node.val === dest) return str;

  const left = findPath(node.left, dest, str + 'L')
  const right = findPath(node.right, dest, str + 'R')

  return left || right;
}