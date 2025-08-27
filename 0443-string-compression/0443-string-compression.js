/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    
    let l = 0;
    let r = 0;
    while (r < chars.length) {
        const curr = chars[r];
        let count = 0;
        // c: 
        // [a,a,b,b,c,c,c]
        //  l r
        while (curr === chars[r]) {
            count++;
            r++
        }
        chars[l++] = curr;
        if (count <= 1) continue;

        for (const digit of count.toString()) {
            chars[l] = digit;
            l++
        }

    }

    return l;
};