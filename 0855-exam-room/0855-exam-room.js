/**
 * @param {number} n
 */
var ExamRoom = function (n) {
    this.total = n
    this.seats = []
};

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function () {
    const seats = this.seats;
    const total = this.total;
    const N = seats.length;
    if (N === 0) {
        seats.push(0)
        return 0
    }
    let distance = Math.max(seats[0], total - 1 - seats[N - 1])
    for (let i = 0; i < N - 1; i++) {
        distance = Math.max(distance, Math.floor((seats[i + 1] - seats[i]) / 2))
    }

    if (distance === seats[0]) {
        seats.splice(0, 0, 0)
        return 0
    }

    for (let i = 0; i < N - 1; i++) {
        const currentDistance = Math.floor((seats[i + 1] - seats[i]) / 2)
        if (distance === currentDistance) {
            seats.splice(i + 1, 0, Math.floor((seats[i + 1] + seats[i]) / 2))
            return seats[i + 1]
        }
    }

    seats.push(total - 1)
    return total - 1

};

/** 
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function (p) {
    const seats = this.seats
    const N = seats.length;

    for (let i = 0; i < N; i++) {
        if (seats[i] === p) {
            seats.splice(i, 1)
        }
    }
};

/** 
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */