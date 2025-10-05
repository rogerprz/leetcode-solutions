/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
/**
[[1,0],[2,0],[3,1],[3,2]]
// Courses = 4
 0 -> 1, 2 
 1 -> 3
 2 -> 3

 */
var findOrder = function(numCourses, prerequisites) {
    const graph = {}
    // [0,0,0,0]
    const inDegree = new Array(numCourses).fill(0)

    for (const [course, pre] of prerequisites) {
        if (!(pre in graph)) graph[pre] = []
        graph[pre].push(course)
        inDegree[course]++
    }

    let res = []
    let queue = [] // parentCourse, no prereqs

    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i)
    }

    while (queue.length > 0) {
        const curr = queue.shift()

        res.push(curr)

        if (!(curr in graph)) continue

        for (const neighbor of graph[curr]) {
            inDegree[neighbor]--
            if (inDegree[neighbor] === 0) queue.push(neighbor)
        }
    }
    return res.length === numCourses ? res : []
};