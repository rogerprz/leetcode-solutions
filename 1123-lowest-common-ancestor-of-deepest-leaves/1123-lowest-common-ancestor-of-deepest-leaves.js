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
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {
    if (!root) return root 
    const max = 0;
    const currentNode = null;
    const explore = (node, level = 0) => {
        if (!node) return [null, 0]

        const [leftNode, leftLevel] = explore(node.left, level + 1)
        const [rightNode, rightLevel] = explore(node.right, level + 1)


        if (leftLevel === rightLevel) {
            return [node, leftLevel + 1]
        } else if (leftLevel > rightLevel) {
            return [leftNode, leftLevel + 1]
        } else {
            return [rightNode, rightLevel + 1]
        }
    }
    
    return explore(root)[0] 
};