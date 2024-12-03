/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let str = ''
    //      EnjoyY
    let prev = 0

    for (const space of spaces) {
        const firstHalf = s.substring(0,space - prev)
        const secondHalf = s.substring(space - prev)
        s = secondHalf
        str += `${firstHalf} `
        prev = space
    }
    return str + s
};