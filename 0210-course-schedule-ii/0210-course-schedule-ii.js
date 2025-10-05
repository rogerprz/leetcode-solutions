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

    const res = []
    const queue = []

    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) queue.push(i)
    }
  /**
    [[1,0],[2,0],[3,1],[3,2]]
    0: 1, 2
    1: 3
    3: 3
     */
    //  in = [0,1,1,2]

    while (queue.length > 0) {
        let preNum = queue.shift();
        //  1, 2
        res.push(preNum)
        if (!(preNum in graph)) continue

        for (const course of graph[preNum]) {
            inDegree[course]--
            if (inDegree[course] === 0) queue.push(course)
        }
    }
    return res.length === numCourses ? res : [];
};