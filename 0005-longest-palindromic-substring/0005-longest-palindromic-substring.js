/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = '';
    const findLongestPalindrome = (str, i, j) => {
        while(i >= 0 && j < str.length && str[i] === str[j]) {
            i -= 1;
            j += 1;
        }
        // slice the qualified substring from the second last iteration
        return str.slice(i + 1, j);
    }
    for (let i = 0; i < s.length; i++) {
        const currOdd = findLongestPalindrome(s, i, i);
        const currEven = findLongestPalindrome(s, i, i + 1);
        const currLongest = 
              currOdd.length > currEven.length ? currOdd : currEven;
        
        if (currLongest.length > longest.length) longest = currLongest;
    }
    return longest;
};