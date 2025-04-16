
var HitCounter = function() {
    this.queue = []
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    while(this.queue[0] <= timestamp - 300) {
        this.queue.shift();
    }
    this.queue.push(timestamp)
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    while (this.queue[0] <= timestamp - 300) {
        this.queue.shift();
    }
    return this.queue.length;
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */