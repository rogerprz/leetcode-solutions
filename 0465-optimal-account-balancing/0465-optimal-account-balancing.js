/**
 * @param {number[][]} transactions
 * @return {number}
 */
function minTransfers(transactions) {
    const balance = {};

    // Calculate net balance of each person
    for (const [from, to, amount] of transactions) {
        balance[from] = (balance[from] || 0) - amount;
        balance[to] = (balance[to] || 0) + amount;
    }

    // Filter out persons with non-zero balances
    const debts = Object.values(balance).filter(amount => amount !== 0);

    // Helper function for DFS
    function dfs(start) {
        while (start < debts.length && debts[start] === 0) {
            start++;
        }

        if (start === debts.length) return 0;

        let minTransactions = Infinity;
        for (let i = start + 1; i < debts.length; i++) {
            if (debts[start] * debts[i] < 0) {  // must have opposite signs
                // Settle debts[start] with debts[i]
                debts[i] += debts[start];

                minTransactions = Math.min(minTransactions, 1 + dfs(start + 1));

                // Backtrack
                debts[i] -= debts[start];
            }
        }

        return minTransactions;
    }

    return dfs(0);
}