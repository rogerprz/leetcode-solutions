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
   if (!head) return null;

    const stack = [head];

    while (stack.length > 0) {
        let node = stack.pop();

        if (node.next) stack.push(node.next);
        if (node.child) {
            stack.push(node.child);
            node.next = node.child;
            node.child.prev = node;
            node.child = null;
        }

        if (stack.length > 0) {
            node.next = stack[stack.length - 1];
            stack[stack.length - 1].prev = node;
        }
    }

    return head;
};