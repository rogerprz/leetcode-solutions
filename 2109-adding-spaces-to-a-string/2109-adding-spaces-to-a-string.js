/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let str = ''
//      EnjoyY
    for (let i = 0; i < s.length;i++) {
        // s = "EnjoyYourCoffee" and 
        //      0123456789    
        // spaces = [5, 9]
        let char = s[i]
        if (spaces.length > 0 && spaces[0] === i) {
            spaces.shift()
            str += ` ${char}`
        }
         else {
            str += char
         }
    }
    return str
};