/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let res = 0;
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    for (let i = 0; i < s.length;i++) {
        const curr = s[i];
        const next = s[i+1]

        if (roman[curr] < roman[next]) {
            res -= roman[curr]
        } else {
            res += roman[curr]
        }
    }
    return res
};