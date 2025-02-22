/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {
    if (!head) return head
    const result = new Node(null, null, head, null) 
    let prev = result
    let stack = [head]

    while (stack.length > 0) {
        let node = stack.pop()

        prev.next = node 
        node.prev = prev

        if (node.next) {
            stack.push(node.next)
        }
        if (node.child) {
            stack.push(node.child)
            node.child = null
        }
        prev = node
    }
    result.next.prev = null;

    return result.next
};