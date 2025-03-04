/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    
    // .. 
    // multi ////
    // .... are dir names 
    /**
    split the array by /
    -> 
     */
     const paths = path.split("/")
     const stack = [];

     for (const subPath of paths) {
        if (subPath === '' || subPath === ".") continue 

        if (subPath === "..") {
            stack.pop()
            continue
        }
        stack.push(subPath)
     }
     
     return '/' + stack.join("/")
};