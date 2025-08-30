 /**
    "FileSystem",[]             -> null
    "createPath",["/leet",1]    -> true
    "createPath",["/leet/code",2]-> true 
    "get", ["/leet/code"]       -> 2
    "createPath",["/c/d",1]     -> false 
    "get", ["/c"]               -> -1

*/
var FileSystem = function() {
    this.paths = new Map();
};

/** 
 * @param {string} path 
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.createPath = function(path, value) {
    if (path === "" && path === "/") return false
    let parent = path.slice(0, path.lastIndexOf("/"))

    if (!this.paths.has(path) && (this.paths.has(parent) || parent === "")) {
        this.paths.set(path, value)

        return true;
    }
    return false
};

/** 
 * @param {string} path
 * @return {number}
 */
FileSystem.prototype.get = function(path) {
    if (this.paths.has(path)) {
        return this.paths.get(path)
    }
    return -1
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */