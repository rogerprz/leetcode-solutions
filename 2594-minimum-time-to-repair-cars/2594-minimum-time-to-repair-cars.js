/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
    let maxRank = Math.max(...ranks)
    let minRank = Math.min(...ranks)
    let freq = new Array(maxRank+1).fill(0)

    for (const rank of ranks) {
        minRank = Math.min(minRank, rank)
        freq[rank]++
    }

    let low = 1; 
    let high = minRank * cars * cars

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        let carsRepaired = 0;

        for (let rank = 1; rank <= maxRank; rank++) {
            carsRepaired += freq[rank] * Math.floor(Math.sqrt(Math.floor(mid / rank)));
        }

        if (carsRepaired >= cars) {
            high = mid; 
        } else {
            low = mid + 1; 
        }
    }
    return low
};