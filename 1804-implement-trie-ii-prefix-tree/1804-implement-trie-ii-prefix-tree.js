
var Trie = function() {
    this.root = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;

    for (const char of word) {
        if (!(char in node)) {
            node[char] = { count: 0 }
        }
        node = node[char]
        node.count++
    }
    if (node.wordCount) {
        node.wordCount++
    } else {
        node.wordCount = 1
    }
    node.isWord = true
};

/** 
 * @param {string} word
 * @return {number}
 */
Trie.prototype.countWordsEqualTo = function(word) {
    let node = this.root;

    for (const char of word) {
        if (!(char in node)) {
            return 0
        }
        node = node[char]
    }
    if (node.isWord !== undefined) {
        return node.wordCount;
    }
    return 0
};

/** 
 * @param {string} prefix
 * @return {number}
 */
Trie.prototype.countWordsStartingWith = function(prefix) {
    let node = this.root;

    for (const char of prefix) {
        if (!(char in node)) {
            return 0
        }
        node = node[char]
    }
    if (node.count !== undefined) {
        return node.count
    }
    return 0
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.erase = function(word) {
    let node = this.root

    for (const char of word) {
        if (!(char in node)) {
            return
        }
        node[char].count--
        if (node[char] === 0) {
            delete node[char]
            return
        }
        node = node[char]
    }
    node.wordCount--
    if (node.wordCount === 0) {
        node.isWord = false
    }
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.countWordsEqualTo(word)
 * var param_3 = obj.countWordsStartingWith(prefix)
 * obj.erase(word)
 */