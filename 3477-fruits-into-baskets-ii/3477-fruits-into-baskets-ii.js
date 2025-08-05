/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    let count = 0;
    for (const fruit of fruits) {
        let found = false;
        for (let i = 0; i < baskets.length;i++) {
            const basket = baskets[i];

            if (basket !== false) {
                if (fruit <= basket) {
                    baskets[i] = false
                    found = true;
                    break;
                } 
            }
        }
        if (!found) {
            count++
        }
    }
    return count
};