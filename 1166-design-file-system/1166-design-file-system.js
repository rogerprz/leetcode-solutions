var FileSystem = function() {
    this.paths = new Map();
};

/** 
 * @param {string} path 
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.createPath = function(path, value) {
    if (path === "" && path === "/") return false;
    const parent = path.slice(0, path.lastIndexOf('/'))

    if (!this.paths.has(path) && (this.paths.has(parent) || parent === "" )) {
        return !!this.paths.set(path, value)
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