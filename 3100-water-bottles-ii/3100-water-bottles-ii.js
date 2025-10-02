/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    let result = 0;
    let count = 0;
    // numBottles = 13, 
    // numExchange = 6
    while (numBottles > 0) {
        count--
        const drinkMore = Math.floor(numBottles / numExchange) // 7 / 7
        //  1
        if (drinkMore === 0){
            result += numBottles
            break;
        }
        numBottles -= numExchange // 13 - 6 = 7
        result += numExchange     // 6
        numExchange++
        numBottles++             // 6 + 1 = 7
    }
    return result;
};