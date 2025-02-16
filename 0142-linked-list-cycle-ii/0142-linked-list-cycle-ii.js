/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const set = new Set()
    let count = 0;
    while (head && head.next) {
        if (set.has(head)) {
            return head
        }
        count++
        set.add(head)
        head = head.next
    }
    return null
};