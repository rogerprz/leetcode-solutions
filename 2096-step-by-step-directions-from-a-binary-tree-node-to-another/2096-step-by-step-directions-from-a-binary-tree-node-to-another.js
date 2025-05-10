/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    const sPath = findPath(root, startValue)
    const ePath = findPath(root, destValue)
    while(sPath.length > 0 && ePath.length > 0 && sPath[sPath.length-1] === ePath[ePath.length-1]){
        sPath.pop()
        ePath.pop()
    }
    return 'U'.repeat(sPath.length) + ePath.reverse().join('')

};

const findPath = (root, val) => {
    if(root === null) return null
    if(root.val === val) return []
    
    const left = findPath(root.left, val)
    if(left){
        left.push('L')
        return left
    } 
    const right = findPath(root.right, val)
    if(right){
        right.push('R')
        return right
    }
    return null
}