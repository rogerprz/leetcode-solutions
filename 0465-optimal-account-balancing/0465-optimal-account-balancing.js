/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minTransfers = function(transactions) {
    const balance = {}

    for (const [from, to, amount] of transactions) {
        if (!(from in balance)) balance[from] = 0
        if (!(to in balance)) balance[to] = 0
        balance[from] -= amount 
        balance[to] += amount
    }

    const debts = Object.values(balance).filter((amount) => amount != 0)

    const dfs = (start) => {
        while (start < debts.length && debts[start] === 0) {
            start++
        }

        if (start === debts.length) return 0;

        let minTransaction = Infinity;
        const seen = new Set();
        for (let i = start + 1; i < debts.length; i++) {
            if (debts[start] * debts[i] < 0 && !seen.has(debts[i])) {
                seen.add(debts[i]);
                debts[i] += debts[start]

                minTransaction = Math.min(minTransaction, 1 + dfs(start + 1))

                debts[i] -= debts[start]
            }
        }
        return minTransaction
    }

    return dfs(0)
};