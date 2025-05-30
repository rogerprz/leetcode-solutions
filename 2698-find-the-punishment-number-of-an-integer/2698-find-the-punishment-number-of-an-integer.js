/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (canPartition(String(i * i), 0, i)) {
            sum += (i * i);
        }
    }
    return sum;
};

var canPartition = function(num, index, target) {
        if (index === num.length) return target === 0;

        let sum = 0;
        for (let i = index; i < num.length; i++) {
            sum = sum * 10 + Number(num[i]);
            if (sum > target) break;
            if (canPartition(num, i + 1, target - sum)) return true;
        }
        return false;
    }