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
   let node = head;
   const stack = [];

    while (node) {
        // if a child, we need to push next
        if (node.child) {
            // send next to stack while we re-assign next
            if (node.next) stack.push(node.next)
            // assign next to the child 
            node.next = node.child;
            // assign child prev to the curr node,
            // bc child prev is null;
            node.child.prev = node;
            // remove the child by null;
            node.child = null;
        }
        // if no node.next & stack.len > 0
        // we need grab from stack to continue flatten
        if (!node.next && stack.length > 0) {
            // get prev node level list
            let nextNode = stack.pop();
            // assign next null to popped node
            node.next = nextNode;
            // let nextNode know it's prev is node
            nextNode.prev = node
        }
        node = node.next;
    }

    return head
};