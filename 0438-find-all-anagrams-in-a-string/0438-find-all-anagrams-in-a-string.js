/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
    const output = [];
    const neededChars = {};
    for (let char of p) {
        if (!(char in neededChars)) {
            neededChars[char] = 0
        }
        neededChars[char]++
    }

    let left = 0;
    let right = 0; 
    let P = p.length

    while (right < s.length) {
        const rChar = s[right]
        if (neededChars[rChar] > 0) P--;
    
        neededChars[rChar]--;
        right++;
    
        if (P === 0) output.push(left);
    
        if (right - left == p.length) {
            const lChar = s[left]
            
            if (neededChars[lChar] >= 0) P++;
            neededChars[lChar]++;
            left++;
        }
    }
    return output;
};