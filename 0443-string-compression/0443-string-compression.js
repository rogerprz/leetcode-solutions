/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let l = 0; 
    let r = 0;
    // ["a","a","b","b","c","c","c"]
    //.         l.   r 
    //   cn
    // count=2
    while (r < chars.length) {
        let count = 0; 
        const char = chars[r];
        while (r < chars.length && char === chars[r]) {
            count++
            r++
        }
        chars[l++] = char
        if (count > 1) {
            const countStr = count.toString()
            for (const num of countStr) {
                chars[l] = num;
                l++
            }
        }
    }

    return l
};