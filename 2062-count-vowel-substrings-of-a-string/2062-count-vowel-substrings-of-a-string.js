/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    const vowels = new Set(['a','e','i','o','u'])
    const map = new Map()
    let total = 0;
    const N = word.length;

    for (let i = 0; i < N;i++) {
        map.clear()
        for (let j = i; j < N; j++) {
            const subChar = word[j];

            if (!vowels.has(subChar)) break
            
            map.set(subChar, true)
            if (map.size === 5) total++
        }
    }
    return total;
};