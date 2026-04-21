class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()

        res = []
        prev = intervals[0]
        res.append(prev)

        for i in range(1, len(intervals)):
            interval = intervals[i]
            start= interval[0]
            end = interval[1]
            if start <= prev[1]:
                prev[1] = max(end, prev[1])
            else:
                prev = interval
                res.append(interval)
        
        return res



# var merge = function(intervals) {
#     intervals.sort((a,b) => a[0] - b[0])
#     let res = []
#     let prev = intervals[0]
#     res[0] = prev

#     for (let i = 1; i < intervals.length;i++) {
#         const interval = intervals[i]
#         const [start,end] = interval
#         if (start <= prev[1]) {
#             prev[1] = Math.max(end, prev[1])
#         } else {
#             prev = interval
#             res.push(prev)
#         }
#     }
#     return res
# };