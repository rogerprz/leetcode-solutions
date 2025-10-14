/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0)

    const graph = {}

    for (const [course, preReq] of prerequisites) {
        if (!(preReq in graph)) {
            graph[preReq] = []
        }
        inDegree[course]++
        graph[preReq].push(course)
    }

    let res = []
    let stack = []

    for (let i = 0; i < inDegree.length;i++) {
        if (inDegree[i] === 0) stack.push(i)
    }

    while (stack.length > 0) {
        const course = stack.pop();
        res.push(course)

        for (let pre of graph[course] || []) {
            inDegree[pre]--
            if (inDegree[pre] === 0) stack.push(pre)
        }
    }
    return res.length === numCourses
};