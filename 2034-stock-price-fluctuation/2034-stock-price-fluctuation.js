class StockPrice {
    constructor() {
        this.timeMap = new Map()
        this.priceCount = new Map()
        this.maxPrice = -Infinity
        this.minPrice = Infinity
        this.lastTime = 0
    }

    update(timestamp, price) {
        if (this.timeMap.has(timestamp)) {
            const oldPrice = this.timeMap.get(timestamp)

            const oldCount = this.priceCount.get(oldPrice)
            if (oldCount === 1) {
                this.priceCount.delete(oldPrice)
            } else {
                this.priceCount.set(oldPrice, oldCount -1)
            }
        }

        this.timeMap.set(timestamp, price)
        this.lastTime = Math.max(this.lastTime, timestamp)

        this.priceCount.set(price, (this.priceCount.get(price) || 0) +1)
        if (price > this.maxPrice ) this.maxPrice = price
        if (price < this.minPrice) this.minPrice = price

    }

    current() {
        return this.timeMap.get(this.lastTime)
    }

    maximum() {
        while (!this.priceCount.has(this.maxPrice)) {
            this.maxPrice -=1
        }
        return this.maxPrice
    }

    minimum() {
        while (!this.priceCount.has(this.minPrice)) {
            this.minPrice +=1
        }
        return this.minPrice
    }
}