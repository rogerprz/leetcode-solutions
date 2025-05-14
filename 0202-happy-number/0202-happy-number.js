/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = new Set();
    while(n !== 1) {
        if(seen.has(n)) return false;
        seen.add(n);
        n = sumSqDigits(n);
    }
    return true;
};

const sumSqDigits=(n)=>{
    let sum = 0;
    while(n > 0){
        const num = n % 10;
        sum += num * num;
        n = Math.floor(n/10);
    }
    return sum;
}