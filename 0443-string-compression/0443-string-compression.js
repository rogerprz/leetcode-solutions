/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let l = 0;
    let r = 0;

    while(l < chars.length){
        const char = chars[l];
        let count = 0;

        while(l < chars.length && chars[l] === char){
            l++;
            count++;
        }

        chars[r++] = char;

        if(count > 1){
            const countStr = count.toString();

            for(let digit of countStr){
                chars[r++] = digit;
            }
        }
    }

    return r;
};