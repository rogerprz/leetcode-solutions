/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    const freq = {};
    const nums = new Set()
    for (let num of answers) {
        freq[num] = (freq[num] || 0) + 1;
        nums.add(num)
    }
    let count = 0;
    for (let num of nums) {
        const groups = Math.ceil(freq[num] / (num+1));
        count += groups * (num + 1);
    }

    return count;
};