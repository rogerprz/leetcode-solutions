
class NumberContainers {
    constructor() {
        this.store = new Map();
        this.rec = new Map();
    }

    change(index, number) {
        if (this.store.has(index)) {
            let oldNumber = this.store.get(index);
            this.rec.get(oldNumber).delete(index);
            if (this.rec.get(oldNumber).size === 0) {
                this.rec.delete(oldNumber);
            }
        }
        this.store.set(index, number);
        if (!this.rec.has(number)) this.rec.set(number, new Set());
        this.rec.get(number).add(index);
    }

    find(number) {
        return this.rec.has(number) && this.rec.get(number).size > 0 ? Math.min(...this.rec.get(number)) : -1;
    }
}