/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = nums => {
	const maxVal = Math.max(...nums)
	let maxStreak = 0,
		streak = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === maxVal) {
            streak++
            if (streak > maxStreak) {
                maxStreak = streak
            }
        } else {
            streak = 0
        }
	}
	return maxStreak
}