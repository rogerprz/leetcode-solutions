/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const result = []
    // double 
    // /// ['','','']
    
    // consecutive
    for (const val of path.split('/')) {
    // single
        if (val === '' || val === '.') continue 

        if (val === '..') {
            result.pop()
        } else {
            result.push(val)
        }
    }

    return `/${result.join('/')}`
};