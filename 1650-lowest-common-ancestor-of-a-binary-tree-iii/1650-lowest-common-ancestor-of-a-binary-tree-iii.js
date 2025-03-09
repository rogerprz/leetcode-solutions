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
    let pDepth = 0
    let qDepth = 0
    let tempP = p
    let tempQ = q
    while (tempP) {
        tempP = tempP.parent 
        pDepth++
    }
    while (tempQ) {
        tempQ = tempQ.parent 
        qDepth++
    }

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