
var LogSystem = function() {
    this.logs = [];
    this.timePos = {
      Year: 1,
      Month: 2,
      Day: 3,
      Hour: 4,
      Minute: 5,
      Second: 6
    }
};

/** 
 * @param {number} id 
 * @param {string} timestamp
 * @return {void}
 */
LogSystem.prototype.put = function(id, timestamp) {
    this.logs.push([id, timestamp])
};

/** 
 * @param {string} start 
 * @param {string} end 
 * @param {string} granularity
 * @return {number[]}
 */
LogSystem.prototype.retrieve = function(start, end, granularity) {
    const startTime = this.parse(start, granularity)
    const endTime = this.parse(end, granularity)

    const ans = []
    
    for (const [id, timestamp] of this.logs) {
        const parsedTime = this.parse(timestamp, granularity)

        if (parsedTime >= startTime && parsedTime <= endTime) {
            ans.push(id)
        }
    }
    return ans
};

LogSystem.prototype.parse = function(timestamp, granularity) {
    const depth = this.timePos[granularity]

    return timestamp.split(':').slice(0, depth).join(':')
  }

/** 
 * Your LogSystem object will be instantiated and called as such:
 * var obj = new LogSystem()
 * obj.put(id,timestamp)
 * var param_2 = obj.retrieve(start,end,granularity)
 */