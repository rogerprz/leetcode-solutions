class Solution:
    def getHappyString(self, n: int, k: int) -> str:
        # num of happy strings of len(n) = 3 * 2 ^ (n-1)
        totalHappy = 3 * (2**(n-1))
        if k > totalHappy:
            return ""
        
        output = ""
        choices = "abc"
        low, high = 1, totalHappy
        for i in range(n):
            partitionSize = (high - low + 1) // len(choices)
            cur = low
            for c in choices:
                if k in range(cur, cur + partitionSize):
                    output += c
                    low = cur
                    high = cur + partitionSize - 1
                    choices = "abc".replace(c, "")
                    break
                cur += partitionSize
        return output