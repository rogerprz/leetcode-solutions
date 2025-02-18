/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // sort each element
    // then we save them in hash or new Map. 
    // for each that we find, we add it to the values of the array 
    const map = {}
    // ["eat","tea","tan","ate","nat","bat"]
    for (const word of strs) {
        // ["eat" -> aet, 
        //  tea -> aet
        const sorted = word.split("").sort().join("")
        console.log('S:', sorted)

        if (!(sorted in map)) {
            map[sorted] = []
        }
        
        map[sorted].push(word)
    }

    return Object.values(map)
};