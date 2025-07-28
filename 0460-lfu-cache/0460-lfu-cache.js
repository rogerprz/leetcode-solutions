class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.freq = 1;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLL {
    constructor() {
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }

    addToHead(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
        this.size++;
    }

    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.size--;
    }

    removeTail() {
        if (this.size === 0) return null;
        const node = this.tail.prev;
        this.removeNode(node);
        return node;
    }

}

/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.cap = capacity
    this.keyToNode = new Map()
    this.freqToList = new Map()
    this.minFreq = 0
    this.size = 0
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if(!this.keyToNode.has(key)) return -1
    const node = this.keyToNode.get(key)
    this.updateFreq(node)
    return node.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if (this.capacity === 0) return;
    if(this.keyToNode.has(key)){
        const node = this.keyToNode.get(key)
        node.value = value
        this.updateFreq(node)
    }else {
        if (this.size === this.cap) {
            const dll = this.freqToList.get(this.minFreq);
            const nodeToRemove = dll.removeTail();
            this.keyToNode.delete(nodeToRemove.key);
            this.size--;
        }
        const newNode = new Node(key, value)
        this.keyToNode.set(key, newNode)
        if (!this.freqToList.has(1)) {
            this.freqToList.set(1, new DoublyLL());
        }
        this.freqToList.get(1).addToHead(newNode);
        this.minFreq = 1;
        this.size++;
    }
};

LFUCache.prototype.updateFreq = function(node) {
    const freq = node.freq
    const dll = this.freqToList.get(freq)
    dll.removeNode(node)

    if(freq == this.minFreq && dll.size == 0){
        this.minFreq++
    }

    node.freq++
    if (!this.freqToList.has(node.freq)) {
        this.freqToList.set(node.freq, new DoublyLL());
    }
    this.freqToList.get(node.freq).addToHead(node);
}

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */