/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    /*
    1: 3 = 4
    2: 1 = 3
    3: 1 = 4
    */
    let count = 0;
    const map = new Map()

    answers.forEach((ans)=> {
        if (!(map.has(ans))) {
            map.set(ans, 0)
        }
        map.set(ans, map.get(ans) + 1)
    })
    map.entries().forEach(([key, value]) => {
        const k = parseInt(key)

        const groupSize = k + 1;
        const groups = Math.ceil(value / groupSize);
        count += groups * groupSize;
    })

    return count
};