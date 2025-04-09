/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const freq = new Array(26).fill(0)

    let count = 0;

    // console.log(arrT.join(""))
    // console.log(arrS.join(""))

    // 
    // 
    // acilr
    for (let i = 0; i < s.length;i++) {
        const one = s[i];

        const idx = one.charCodeAt(0) - 'a'.charCodeAt(0)

        freq[idx]++
    }

    for (let i  = 0; i < t.length; i++) {
        const one = t[i];
         const idx = one.charCodeAt(0) - 'a'.charCodeAt(0)
         if (freq[idx] > 0) {
            freq[idx]--
         } else {
            count++
         }
    }
    return count
};