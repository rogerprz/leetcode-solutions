/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function(p, q) {
    let pDepth = findDepth(p)
    let qDepth = findDepth(q)
   
    while (pDepth !== qDepth) {
        if (pDepth > qDepth) {
            p = p.parent 
            pDepth--
        } else {
            q = q.parent 
            qDepth--
        }
    }
    while (p !== q) {
        p = p.parent 
        q = q.parent
    }
    return p
};

const findDepth = (node) =>{
    let depth = 0;
    while (node) {
        node = node.parent 
        depth++
    }
    return depth
}