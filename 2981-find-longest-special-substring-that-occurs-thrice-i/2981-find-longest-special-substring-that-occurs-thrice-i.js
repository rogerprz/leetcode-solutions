/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    const aCode = "a".charCodeAt();
    const counts = Array.from({ length: 26}, () => new Array(3).fill(0));
    let prev;
    let count = 0;

    const save = () => {
       
    };

    for (let i = 0; i <= s.length; i++) {
        if (prev === s[i]) {
            count++;
        }
        else {
            if (count > 0) {
                const index = prev.charCodeAt() - aCode;
                if (counts[index][0] < count) {
                    counts[index][2] = counts[index][1];
                    counts[index][1] = counts[index][0];
                    counts[index][0] = count;
                } else if (counts[index][1] < count) {
                    counts[index][2] = counts[index][1];
                    counts[index][1] = count;
                } else if (counts[index][2] < count) {
                    counts[index][2] = count;
                }
            }
            prev = s[i];
            count = 1;
        }
    }

    let result = -1;

    for (let i = 0; i < 26; ++i) {
        count = Math.min(counts[i][0], counts[i][1], counts[i][2]);
        if (count) result = Math.max(result, count);
        count = Math.min(counts[i][0] - 1, counts[i][1]);
        if (count > 0) result = Math.max(result, count);
        count = counts[i][0] - 2;
        if (count > 0) result = Math.max(result, count);
    }

    return result;
};