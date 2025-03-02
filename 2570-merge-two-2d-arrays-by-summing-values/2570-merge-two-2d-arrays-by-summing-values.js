/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    // nums1 = [[1,2],[2,3],[4,5]], 
    // nums2 = [[1,4],[3,2],[4,1]]
    const map = new Map()

    for (const [id,num] of nums1) {
        map.set(id, num)
    }

    for (const [id, num] of nums2) {
        if (map.has(id)) {
           const prevNum = map.get(id)
           map.set(id, prevNum + num)
        } else {
            map.set(id, num)
        }
    }
    const sorted = [...map.entries()].sort((a,b) => a[0] - b[0])
    return sorted
};