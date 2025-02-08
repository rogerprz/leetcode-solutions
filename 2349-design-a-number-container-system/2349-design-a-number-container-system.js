
var NumberContainers = function() {
    this.nums = {};
    this.numCache = {};
    this.idx = {};
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
    if (index in this.idx) {
        const old_num = this.idx[index];
        if (old_num == number) return;
        const set = this.nums[old_num];
        set.delete(index);
        if (old_num in this.numCache && 
            index == this.numCache[old_num]) {
            delete this.numCache[old_num];
        }
    }
    this.idx[index] = number;
    this.nums[number] ||= new Set();
    this.nums[number].add(index);
    if (number in this.numCache) {
        this.numCache[number] = Math.min(index, this.numCache[number]);
    } 
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    if (!this.nums[number] || this.nums[number].size <= 0) {
        return -1;
    }
    if (number in this.numCache) {
        return this.numCache[number];
    }
    const arr = [...this.nums[number].values()].sort((a,b) => a-b);
    this.numCache[number] = arr[0];
    return arr[0];
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */