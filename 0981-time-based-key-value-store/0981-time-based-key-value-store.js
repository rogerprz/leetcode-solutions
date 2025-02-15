
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
    if (!this.items.has(key)){
        this.items.set(key, [])
    }
    this.items.get(key).push({prevTime: timestamp, value})
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.items.has(key)) return ''

    const items = this.items.get(key)
    let l = 0, r = items.length - 1
    // timestamp_prev <= timestamp
    // [{bar, 1}, ]
    let res = ''
    while (l <= r) {
        const mid = Math.floor((l+ r)/ 2)
        const { prevTime, value} = items[mid]
        if (prevTime === timestamp) return value
        /**
        [{1,}]
         */
        if (prevTime <= timestamp){
            l = mid + 1
            res = value
        }
        else {
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