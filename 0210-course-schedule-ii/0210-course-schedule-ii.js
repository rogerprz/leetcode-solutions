/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // numCourses = 4, 
    // prerequisites = [[1,0],[2,0],[3,1],[3,2]]
    // 0 = 1
    //   <- 2 <- 2
    let graph = {}
    let inDegree = new Array(numCourses).fill(0)

    for (const [course, pre] of prerequisites) {
        if (!(pre in graph)) {
            graph[pre] = []
        }
        graph[pre].push(course)
        inDegree[course]++
    }
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i)
    }
    const res = [];

    while (queue.length > 0) {
        const curr = queue.shift();
        res.push(curr);
        if (curr in graph) {
            for (const neighbor of graph[curr]) {
                inDegree[neighbor]--
                if (inDegree[neighbor] === 0) queue.push(neighbor)
            }
        }
    }


    return res.length === numCourses ? res : []
};