
var FileSystem = function() {
    this.root = {};
};

/** 
 * @param {string} path
 * @return {string[]}
 */
FileSystem.prototype.ls = function(path) {
    const arr = path.split("/")
    const curr = this.root;
    let file = '';

    for (let i = 0; i< arr.length;i++) {
        const dir = arr[i];
        if (dir === "") continue;

        if (!curr[dir]) {
            return false;
        }

        if (i === arr.length - 1 && typeof curr[dir] === 'string') {
            file = dir;
            break;
        }
        curr = curr[dir]
    }
    if (typeof curr[file] === 'string') {
        return [file]
    }
    return Object.keys(curr).sort();

};

/** 
 * @param {string} path
 * @return {void}
 */
FileSystem.prototype.mkdir = function(path) {
    const DIR = path.split('/');
    let curr = null;

    for (const dir of DIR) {
        if (dir === "") {
            curr = this.root;
        } else {
            if (!(curr[dir])) {
                curr[dir] = {}
            }
            curr = curr[dir]
        }
    }
    return;
};

/** 
 * @param {string} filePath 
 * @param {string} content
 * @return {void}
 */
FileSystem.prototype.addContentToFile = function(filePath, content) {
    const DIR = filePath.split("/");
    let curr = null;

    for (let i = 0; i < DIR.length; i++) {
        const dir = DIR[i];
        if (dir === "") {
            curr = this.root;
        }
        else if (i === DIR.length - 1) {
            if (!curr[dir]) {
                curr[dir] = content;
            } else {
                curr[dir] = curr[dir] + content;
            }
        } else {
            if (!curr[dir]) {
                curr[dir] = {}
            }
            curr = curr[dir];
        }
    }
    return true;
};

/** 
 * @param {string} filePath
 * @return {string}
 */
FileSystem.prototype.readContentFromFile = function(filePath) {
    const DIR = filePath.split('/');
    let curr = this.root;

    for(let i = 0; i<DIR.length; i++){
        const dir = DIR[i];   

        if(dir === '') continue;        
        if (typeof(curr[dir]) == "object" ){
            curr = curr[dir];
        }
        else if (typeof(curr[dir]) == "string"){
            return curr[dir];
        }
    }
    return false;
};

/** 
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.ls(path)
 * obj.mkdir(path)
 * obj.addContentToFile(filePath,content)
 * var param_4 = obj.readContentFromFile(filePath)
 */