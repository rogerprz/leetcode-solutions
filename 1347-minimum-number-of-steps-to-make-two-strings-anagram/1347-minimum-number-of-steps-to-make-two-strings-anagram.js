/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const freq = new Array(26).fill(0)
    const arrT = t.split("").sort((a,b) => a.localeCompare(b))
    const arrS = s.split("").sort((a,b) => a.localeCompare(b))

    let count = 0;

    console.log(arrT.join(""))
    console.log(arrS.join(""))

    // 
    // 
    // acilr
    for (let i = 0; i < s.length;i++) {
        const one = s[i];

        const idx = one.charCodeAt(0) - 'a'.charCodeAt(0)

        freq[idx]++
    }

    for (let i  = 0; i < arrT.length; i++) {
        const one = arrT[i];
         const idx = one.charCodeAt(0) - 'a'.charCodeAt(0)
         if (freq[idx] > 0) {
            freq[idx]--
         } else {
            count++
         }
    }
    return count
};