/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null

    while(lists.length > 1) {
        const l1 = lists.shift()
        const l2 = lists.shift()

        let result = mergeTwoLists(l1,l2)
        lists.push(result)
    }

    return lists[0]
};

function mergeTwoLists(l1,l2) {
    if (!l1) return l2
    if (!l2) return l1
    let list = new ListNode(0) 
    let visited = list
    while (l1 && l2) {
        let node = null
        if (l1.val < l2.val) {
            node = new ListNode(l1.val)
            l1 = l1.next
        } else {
            node = new ListNode(l2.val)
            l2 = l2.next
        }
        visited.next = node
        visited = visited.next
    }
    if (l1 || l2) {
        visited.next = l1 || l2
    }
    return list.next
}