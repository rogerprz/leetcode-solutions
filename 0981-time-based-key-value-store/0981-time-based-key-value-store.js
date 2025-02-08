
var TimeMap = function() {
    this.items = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.items.has(key)) {
        this.items.set(key, [])
    }
    this.items.get(key).push({value, timestamp})
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!(this.items.has(key))) return ''

    const items = this.items.get(key)
    let l = 0;
    let r = items.length - 1
    let res = "";
    while (l <= r) {
        const mid = Math.floor((l+r)/ 2)
        const curr = items[mid]
        // t: 3
        // [1, 4]
        if (curr.timestamp === timestamp) return curr.value
        if (curr.timestamp <= timestamp) {
            res = curr.value 
            l = mid + 1
        } else {
            r = mid - 1
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