
var TimeMap = function() {
    this.map = new Map()
}

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map.has(key)) {
        this.map.set(key,[])
    }
    this.map.get(key).push({timestamp, value})
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!(this.map.has(key))) return ''

    const items = this.map.get(key)
    let left = 0;
    let right = items.length-1
    let res = ''

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const curr = items[mid].timestamp
        if (curr <= timestamp) {
            res = items[mid].value
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return res
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */