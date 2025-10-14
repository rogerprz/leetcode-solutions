/**
 * @param {number[]} tasks
 * @return {number}
 */
/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const freq = {}
    const keys = new Set()
    // [2,2,3,3,2,4,4,4,4,4]
    /**
        2: 0
        3: 0
        4: 0
     */
    for (const task of tasks) {
        if (!(task in freq)) {
            freq[task] = 0
            keys.add(task)
        }
        freq[task]++
    }

    let rounds = 0; // 3

    for (const key of keys.values()) {
        if (rounds == -1){
            break;
        }
            while (freq[key] > 0) {
                let count = freq[key]

                if (count === 1) {
                    rounds = -1;
                    break;
                }
                const isOdd = count % 2 === 1

                if (isOdd || count > 5) {
                    freq[key] -= 3
                } else {
                    freq[key] -= 2
                }
                rounds++
            }
        
        
    }
    return rounds;
};