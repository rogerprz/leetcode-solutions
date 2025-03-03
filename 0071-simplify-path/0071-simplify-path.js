/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const paths = path.split("/")
    const stack = []
    for (let i =0;i<paths.length;i++) {
        const path = paths[i]
        if (path === "" || path === ".") continue
        if (path === "..") {
            stack.pop()
        } else {
            stack.push(path)
        }
    }

    return "/" + stack.join("/")
};