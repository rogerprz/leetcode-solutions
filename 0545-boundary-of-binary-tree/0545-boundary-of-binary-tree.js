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
    const boundary = [root.val];

    root.left && dfsLeft(root.left, boundary);
    (root.left ?? root.right) && dfsLeaves(root, boundary);
    root.right && dfsRight(root.right, boundary);
    return boundary;
};

function dfsLeft(root, boundary) {
  if (!root.left && !root.right) return;
  boundary.push(root.val);
  if (root.left) dfsLeft(root.left, boundary);
  else if (root.right) dfsLeft(root.right, boundary);
}

function dfsLeaves(root, boundary) {
  if (!root.left && !root.right)
    return boundary.push(root.val);
  root.left && dfsLeaves(root.left, boundary);
  root.right && dfsLeaves(root.right, boundary);
}

function dfsRight(root, boundary) {
  if (!root.left && !root.right) return;
  if (root.right) dfsRight(root.right, boundary);
  else if (root.left) dfsRight(root.left, boundary);
  boundary.push(root.val);
}