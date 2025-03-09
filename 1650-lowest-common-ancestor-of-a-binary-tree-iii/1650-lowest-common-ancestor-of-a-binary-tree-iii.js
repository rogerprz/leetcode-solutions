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
    let ancestors = new Set();

    while (p) {
        ancestors.add(p);
        p = p.parent;
    }

    while (q) {
        if (ancestors.has(q)){
            return q
        }
        q = q.parent;
    }

    return null;
};