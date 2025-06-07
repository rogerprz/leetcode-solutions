var minEatingSpeed = function(piles, h) {
    let l = 1
    let r = Math.max(...piles)
    
    while (l < r) {
        // Get the mid index between l and r boundary indexes.
        // hourSpent stands for the total hour Koko spends.
        let mid = Math.floor((l + r) / 2);
        let hourSpent = 0;

        // Iterate over the piles and calculate hourSpent.
        // We increase the hourSpent by ceil(pile / mid)
        for (const pile of piles) {
            hourSpent += Math.ceil(pile / mid);
        }

        if (hourSpent <= h) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return l;
}