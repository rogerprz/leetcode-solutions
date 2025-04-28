/**
 * @param {number} n
 */
var ExamRoom = function (n) {
    this.totalSeats = n
    this.occupiedSeats = []
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function () {
    if (!this.occupiedSeats.length) {
        this.occupiedSeats.push(0)
        return 0
    }

    let distance = Math.max(this.occupiedSeats[0], this.totalSeats - 1 - this.occupiedSeats[this.occupiedSeats.length - 1])
    for (let i = 0; i < this.occupiedSeats.length - 1; i++) {
        distance = Math.max(distance, Math.floor((this.occupiedSeats[i + 1] - this.occupiedSeats[i]) / 2))
    }

    if (distance === this.occupiedSeats[0]) {
        this.occupiedSeats.splice(0, 0, 0)
        return 0
    }

    for (let i = 0; i < this.occupiedSeats.length - 1; i++) {
        const currentDistance = Math.floor((this.occupiedSeats[i + 1] - this.occupiedSeats[i]) / 2)
        if (distance === currentDistance) {
            this.occupiedSeats.splice(i + 1, 0, Math.floor((this.occupiedSeats[i + 1] + this.occupiedSeats[i]) / 2))
            return this.occupiedSeats[i + 1]
        }
    }

    this.occupiedSeats.push(this.totalSeats - 1)
    return this.totalSeats - 1

};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function (p) {
    for (let i = 0; i < this.occupiedSeats.length; i++) {
        if (this.occupiedSeats[i] === p) {
            this.occupiedSeats.splice(i, 1)
        }
    }
};

/** 
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */