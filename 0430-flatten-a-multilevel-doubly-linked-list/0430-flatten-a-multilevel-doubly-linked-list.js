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
   if (!head) return null
    let node = head
    const stack = []
    
    while (node) {
        if (node.child) {
            if (node.next) stack.push(node.next)
            
            node.next = node.child
            node.child.prev = node
            node.child = null
        }
        
        if (!node.next && stack.length > 0) {
            let nextNode = stack.pop();
            node.next = nextNode;
            nextNode.prev = node;
        }

        node = node.next;
    }

    return head
};