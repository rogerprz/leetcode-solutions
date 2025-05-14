/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    const vowels = new Set(['a','e','i','o','u'])
    const map = new Map()

    let total = 0;

    for (let i = 0; i < word.length;i++) {
        map.clear()
        for (let j = i; j < word.length;j++) {
            const subChar = word[j]

            if (!vowels.has(subChar)) break;
            map.set(subChar, true)
            if (map.size === 5) total++
        }
    }

    return total
};