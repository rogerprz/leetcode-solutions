/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0)

    const graph = {}

    for (const [course, preReq] of prerequisites) {
        if (!(preReq in graph)) {
            graph[preReq] = []
        }
        graph[preReq].push(course)
        inDegree[course]++
    }

    const res = [];
    const queue = []

    for (let i = 0; i < inDegree.length;i++) {
        if (inDegree[i] === 0) queue.push(i)
    }

    while (queue.length > 0) {
        let preNum = queue.shift();

        res.push(preNum)

        if (!(preNum in graph)) continue; 

        for (const course of graph[preNum]) {
            inDegree[course]--
            if( inDegree[course] === 0) queue.push(course) 
        }
    }
    return res.length === numCourses ? res : [];
};