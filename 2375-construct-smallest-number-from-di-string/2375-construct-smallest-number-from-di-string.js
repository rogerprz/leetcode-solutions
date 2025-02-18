/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    const result = [];
    const stack = []
    const len = pattern.length
    for (let i = 0;i <= len;i++) {
        stack.push(i + 1)

        if (i === len || pattern[i] === 'I') {
            while (stack.length > 0) {
                result.push(stack.pop())
            }
        }
    }
    return result.join("")
};
/**
    def smallestNumber(self, pattern: str) -> str:
        result = []
        num_stack = []

        # Iterate through the pattern
        for index in range(len(pattern) + 1):
            # Push the next number onto the stack
            num_stack.append(index + 1)

            # If 'I' is encountered or we reach the end, pop all stack elements
            if index == len(pattern) or pattern[index] == "I":
                while num_stack:
                    result.append(str(num_stack.pop()))

        return "".join(result)
 */