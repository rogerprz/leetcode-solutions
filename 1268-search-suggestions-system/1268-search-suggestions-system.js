/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
/**
products = ["mobile","mouse","moneypot","monitor","mousepad"], 
searchWord = "mouse"

m       ["mobile","moneypot","monitor"],
mo      ["mobile","moneypot","monitor"],
mou     ["mouse","mousepad"],
mous    ["mouse","mousepad"],
mouse   ["mouse","mousepad"]
 */
var suggestedProducts = function(products, searchWord) {
    const trie = new Trie()
    products.sort()
    for (const product of products) {
        trie.add(product)
    }
    const res = trie.getList(searchWord)

    return res
};
class Trie {
    constructor() {
        this.root = {}
    }

    add(word) {
        let node = this.root 

        for (const char of word) {
            if (!(char in node)){
                node[char] = {}
                node[char].words = []
            }
            if (node[char].words.length < 3) {
                node[char].words.push(word)
            }
            node = node[char]
        }
    }
    getList(word) {
        let node = this.root;
        const res = []
        for (const char of word) {
            if (!(char in node)) {
                while (res.length < word.length) res.push([]);
                return res;
            }
            res.push(node[char].words)
            node = node[char]
        }
        return res
    } 
}