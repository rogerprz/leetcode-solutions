const StockPrice = function () {
	this.minHeap = new MinPriorityQueue({
		compare: (a, b) => a.price > b.price,
	});
	this.maxHeap = new MaxPriorityQueue({
		compare: (a, b) => a.price < b.price,
	});
	this.prices = new Map();
	this.currentPrice = {};
};

StockPrice.prototype.update = function (timestamp, price) {
	this.prices.set(timestamp, price);
	this.minHeap.enqueue({ timestamp, price });
	this.maxHeap.enqueue({ timestamp, price });
	if (
		!this.currentPrice.timestamp ||
		this.currentPrice.timestamp <= timestamp
	) {
		this.currentPrice = { timestamp, price };
	}
};

StockPrice.prototype.current = function () {
	return this.currentPrice.price;
};

StockPrice.prototype.maximum = function () {
	let front = this.maxHeap.front();

	while (this.prices.get(front.timestamp) != front.price) {
		this.maxHeap.dequeue();
		front = this.maxHeap.front();
	}

	return front.price;
};

StockPrice.prototype.minimum = function () {
	let front = this.minHeap.front();

	while (this.prices.get(front.timestamp) != front.price) {
		this.minHeap.dequeue();
		front = this.minHeap.front();
	}

	return front.price;
};