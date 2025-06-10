/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    const freq = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
      freq[s.charCodeAt(i) - aCode]++;
    }

    let odd = 0;
    let even = s.length;

    for (let n of freq) {
      if ((n & 1) === 1) {
        odd = Math.max(odd, n);
      } else if (n !== 0) {
        even = Math.min(even, n);
      }
    }

    return odd - even;
};