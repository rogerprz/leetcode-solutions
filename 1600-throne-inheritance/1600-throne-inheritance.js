/**
 * @param {string} kingName
 */

var ThroneInheritance = function(kingName) {
    this.kingName = kingName;
    this.references = new Map ();
    this.references.set(kingName, {name: kingName, children: [], isDead: false});
};

/** 
 * @param {string} parentName 
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function(parentName, childName) {
    const parent = this.references.get(parentName);
    const child = {name: childName, children: [], isDead: false};
    
    parent.children.push(child);
    this.references.set(childName, child);
};

/** 
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function(name) {
    this.references.get(name).isDead = true;
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function() {

    const dfs = (node, order) => {
        if (!node.isDead) order.push(node.name);

        for (child of node.children) {
            dfs(child, order);
        }

        return order
    }

    return dfs (this.references.get(this.kingName), []);
};

/** 
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */