class UnionFind {
    constructor(size) {
        this.size = size;
        this.parent = Array.from(Array(size), (_, idx) => idx);
    }
    find(a) {
        if (a !== this.parent[a]) {
            this.parent[a] = this.find(this.parent[a]);
        }
        return this.parent[a];
    }
    union(a, b) {
        const aRep = this.find(a);
        const bRep = this.find(b)
        this.parent[aRep] = bRep;
    }
}

const processQueries = function(c, connections, queries) {
    const result = [];
    const statuses = Array(c).fill(true);
    const grids = Array.from(Array(c), () => []);
    const uf = new UnionFind(c);
    for (const [a, b] of connections) {
        uf.union(a - 1, b - 1);
    }
    for (let i = 0; i < c; ++i) {
        const root = uf.find(i);
        grids[root].push(i);
    }
    for (const grid of grids) {
        grid.sort((a, b) => b - a);
    }
    for (const [type, station] of queries) {
        if (type === 1) {
            if (statuses[station-1]) {
                result.push(station);
            } else {
                const grid = grids[uf.find(station-1)];
                while (grid.length && !statuses[grid.at(-1)]) grid.pop();
                if (grid.length) result.push(grid.at(-1) + 1);
                else result.push(-1);
            }
        } else if (type === 2) {
            statuses[station-1] = false;
        } else {
            throw `Invalid type: ${type}`;
        }
    }
    return result;
};