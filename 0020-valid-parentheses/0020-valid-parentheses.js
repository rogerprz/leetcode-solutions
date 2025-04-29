/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    const pairs = {
        "{": "}",
        "[": "]",
        "(": ")"
    }

    // "()[]{}"
    for (const char of s) {
        if (pairs[char]) {
            stack.push(char)
        }
        else {
            if (stack.length === 0) return false;
            const open = stack.pop()
            if (pairs[open] !== char) {
                return false
            }
            
        }
    }
    if (stack.length > 0) {
        return false
    }
    return true;
};