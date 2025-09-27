/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const freq = {}
    const nums = new Set()
    // [2,2,3,3,2,4,4,4,4,4]
    /**
        2: 0
        3: 0
        4: 0
     */
    for (const task of tasks) {
        if (!(task in freq)) {
            freq[task] = 0
            nums.add(task)
        }
        freq[task]++
    }

    let rounds = 0; // 3
    for (const num of [...nums]) {
        
        while (freq[num] > 0) {
            const count = freq[num]

            if (count === 1) {
                rounds = -1
                return -1
            }
            const isOdd = count % 2 === 1
            if (isOdd || count > 5 ) {
                freq[num]-=3
            } else {
                freq[num] -=2
            }
            rounds++
        }
    }
    
    return rounds;
};