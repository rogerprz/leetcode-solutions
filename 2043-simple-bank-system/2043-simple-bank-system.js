/**
 * @param {number[]} balance
 */
var Bank = function(balance) {
    this.balance = balance
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
    if (account1 < 1 || account2 < 1) return false;

    const bal1 = this.balance[account1 - 1]
    const bal2 = this.balance[account2 - 1]
    if (bal1 === undefined || bal2 == undefined) {
        return false
    }

    if (bal1 >= money) {
        this.balance[account1 - 1] -= money
        this.balance[account2 - 1] += money 
        return true
    }
    return false 
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
    const balance = this.balance[account - 1]
    if (balance !== undefined) {
        this.balance[account - 1] += money
        return true 
    }
    return false 
};


/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
    const balance = this.balance[account - 1]
    if (balance !== undefined && balance >= money) {
        this.balance[account - 1] -= money
        return true 
    }
    return false 
};

/** 
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */