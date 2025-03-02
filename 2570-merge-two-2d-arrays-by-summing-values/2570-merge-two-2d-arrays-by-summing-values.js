/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    // nums1 = [[1,2],[2,3],[4,5]], 
    // nums2 = [[1,4],[3,2],[4,1]]
    const array = []
    let p1 = 0
    let p2 = 0;
    while (p1 < nums1.length || p2 < nums2.length) {

        if (nums1[p1] && nums2[p2]) { 
            const [id1,num1] = nums1[p1]
            const [id2,num2] = nums2[p2]

            if (id1 === id2) {
                array.push([id1, num1 + num2])
                p1++
                p2++
            }
            else if (id1 < id2) {
                array.push([id1, num1])
                p1++
            }
            else {
                array.push([id2, num2])
                p2++
            }
        } else if (nums1[p1]) {
            const [id1,num1] = nums1[p1]
            array.push([id1, num1])
            p1++
        } else if (nums2[p2]){
            const [id2,num2] = nums2[p2]
            array.push([id2, num2])
            p2++
        }
    }
    return array
};