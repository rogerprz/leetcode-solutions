/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minTransfers = function(transactions) {
    const balance = {}

    for (const [from, to, amount] of transactions) {
        if (!(from in balance)) balance[from]= 0
        if (!(to in balance)) balance[to]= 0

        balance[from] -= amount
        balance[to] += amount
    }

    const debts = Object.values(balance).filter(amount => amount != 0)

    function dfs(start) {
        while (start < debts.length && debts[start] === 0) {
            start++
        }
        if (start === debts.length) return 0;

        let minTransactions = Infinity;

        for (let i = start + 1; i < debts.length;i++) {
            if (debts[start] * debts[i] < 0) {

                debts[i] += debts[start]

                minTransactions = Math.min(minTransactions, 1 + dfs(start + 1))

                debts[i] -= debts[start]
            }
        }
        return minTransactions
    }

    return dfs(0)
};