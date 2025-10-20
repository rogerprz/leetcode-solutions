/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
// One pass + One array pass
var depthSumInverse = function(nestedList) {
    
    const arr = [];
    const helper = (ni, depth) => {
        if(ni.isInteger()) {
            arr[depth] = (arr[depth] || 0) + ni.getInteger();
            return;
        }
        ni.getList().forEach(i => helper(i, depth + 1));
    };
    
    nestedList.forEach(ni => helper(ni, 0));
    
    const maxDepth = arr.length;
    let sum = 0;
    for(let i = arr.length - 1; i >= 0; i--) {
        sum += (maxDepth - i) * (arr[i] || 0);
    }
    
    return sum;
    
};