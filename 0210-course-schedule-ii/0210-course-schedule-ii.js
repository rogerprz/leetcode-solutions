/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // create an inDegree of courses requires
    // graph : pre : courses 
    // for loop
    const inDegree = new Array(numCourses).fill(0)
    const graph = {}
    for (const [course, pre] of prerequisites) {
        if (!(pre in graph)) {
            graph[pre] = []
        }
        inDegree[course]++
        graph[pre].push(course)
    }


    let res = []
    let queue = []
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) queue.push(i)
    }

    while (queue.length > 0) {
        let pre = queue.shift()
        res.push(pre)

        for (const course of graph[pre] || []) {
            inDegree[course]--
            if (inDegree[course] === 0) queue.push(course)
        }
    }
    return res.length === numCourses ? res : []
};