/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */

class DisjointSetUnion {
    constructor(n) {
       this.parent = Array.from({ length: n }, (_, i) => i);
        this.components = n;
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    unite(x,y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX !== rootY) {
            this.parent[rootX] = rootY;
            this.components--
        }

    }

    getComponents(){
        return this.components;
    }
}

function isPossible(n, edges, k, maxCost) {
    const dsu = new DisjointSetUnion(n);

    for (const [u,v,weight] of edges) {
        if (weight <= maxCost) {
            dsu.unite(u,v)
        }
    }

    return dsu.getComponents() <= k;
}

var minCost = function(n, edges, k) {
    let low = 0;
    let high = 1_000_001;
    let ans = high;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (isPossible(n, edges, k, mid)) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans
};
