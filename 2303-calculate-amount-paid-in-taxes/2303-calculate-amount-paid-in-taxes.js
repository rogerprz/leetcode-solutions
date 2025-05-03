/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let res = 0;

    for (let i = 0; i < brackets.length; i++) {
        const [upper, percent] = brackets[i];
        const prevUp = i > 0 ? brackets[i-1][0]: 0
        if (income < 0) break;
        
        const taxableIncome = upper - prevUp
        const leastIncome = Math.min(income, taxableIncome)
        res += leastIncome * (percent/100)
        income -= leastIncome
    }

    return res;
};