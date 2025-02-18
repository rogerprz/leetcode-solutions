/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    /**
    time: O (n * m * n log n * m * v)
    a = 97
    abc
    abd
    bde
    [ 3 , 3 ,1 , d]
      a.  b. c.  d. e 
     */
    const map = {}

    for (const word of strs) {
        const arr = new Array(26).fill(0)

        const chars = word.split("")
        for (const char of chars) {
            const code = char.charCodeAt(0) - 'a'.charCodeAt(0)
            arr[code]++
        }
        const digits = arr.join("-")
        if (!(digits in map)) {
            map[digits] = []
        }
        map[digits].push(word)
    }

    return Object.values(map)
};