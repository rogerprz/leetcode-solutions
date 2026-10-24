class Solution:
    def minOperations(self, s: str) -> int:
        # roger
        n = len(s)
        max_char, min_char = max(s), min(s)
        
        # checks if it's already sorted
        if all(a <= b for a,b in zip(s, s[1:])):
            return 0
        
        if n == 2:
            return -1
        if s[0] == min_char or s[-1] == max_char:
            return 1
        
        for i in range(1, n - 1):
            if s[i] == min_char or s[i] == max_char:
                return 2
        return 3