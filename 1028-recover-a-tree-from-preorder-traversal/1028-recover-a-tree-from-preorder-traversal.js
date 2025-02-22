/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
    if (!traversal) return null
    const stack = []
    let N = traversal.length
    let i = 0;
    while (i < N) {
        let depth = 0
        while (i < traversal.length && traversal[i] === "-") {
                depth++;
                i++;
            }
        let value = '';
        while (i < N && "0123456789".includes(traversal[i])) {
            value += traversal[i]
            i++
        }
        const node = new TreeNode(parseInt(value))

        while (stack.length > depth) {
            stack.pop();
        }
        const sLen = stack.length;
        if (stack.length > 0) {
            let parent = stack[stack.length - 1];
            if (parent.left === null) {
                parent.left = node;
            } else {
                parent.right = node;
            }
        }
        stack.push(node)

    }
    return stack[0]
};