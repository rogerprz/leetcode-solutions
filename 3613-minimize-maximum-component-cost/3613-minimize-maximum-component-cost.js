/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */

class UnionFind {
  constructor(n) {
    this.parent = Array(n).fill().map((_, i) => i);
    this.size = Array(n).fill(1);
  }

  find(a) {
    if (this.parent[a] === a) {
      return a;
    }
    const res = this.find(this.parent[a]);
    this.parent[a] = res;
    return res;
  }


  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) return false;

    if (this.size[rootX] > this.size[rootY]) {
      this.parent[rootY] = rootX;
      this.size[rootX] += this.size[rootY];
    } else {
      this.parent[rootX] = rootY;
      this.size[rootY] += this.size[rootX];
    }
    return true;
  }
}


var minCost = function(n, edges, k) {
    // [[0,1,4],[1,2,3],[1,3,2],[3,4,6]]
    // [[3,4,6],[0,1,4],[1,2,3],[1,3,2]]
    edges.sort((a, b) => b[2] - a[2]);

    const uf = new UnionFind(n);
    let components = n
    let res = 0;

    while (edges.length > 0 && components > k) {
    const [u, v, w] = edges.pop();

    if (uf.union(u, v)) {
        components--;
    }

    res = w;
    }

    return res;
};