/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    /**
    // tempSet = [j1, j2]

 */
    const hash = {}
    for (const account of accounts) {
        const tempStack = []
        const name = account[0]
        for (let i = 1; i < account.length; i++) {
            const email = account[i]
            if (!(email in hash)) {
                hash[email] = {
                    neighbors: new Set(),
                    name
                }
            }
            tempStack.push(email)
        }
        while (tempStack.length > 0) {
            const keyEmail = tempStack.pop()

            for (let i = 1; i < account.length; i++) {
                const email = account[i]
                if (keyEmail === email) {
                    continue
                }
                
                hash[keyEmail].neighbors.add(email)
            }
        }
        // console.log('H:', hash)
    }

    const results = []
    const visited = new Set()

    // visited = johnsmith, john_newyork, john00
    // data = [johnsmith, john_newyork, john00]
    const dfs = (key, data) => {
        if (visited.has(key)) {
            return []
        }
        data.push(key)
        visited.add(key)
        const content = hash[key]
        for (const neighbor of content.neighbors) {
            dfs(neighbor, data)
        }
        return data
    }

    Object.keys(hash).forEach((key) => {
        if (!visited.has(key)){
            const emails = dfs(key, [])
            const name = hash[key].name
            results.push([name, ...emails.sort()])
        }
    })

    return results
};
/**
    'johnsmith@mail.com':
        neighbors:
            'john_newyork@mail.com', 
            'john00@mail.com'
        name: 'John'
    'john_newyork@mail.com':
        neighbors:
            'johnsmith@mail.com'
        name: 'John'
    'john00@mail.com':
        neighbors:
            'johnsmith@mail.com'
        name: 'John'
    'mary@mail.com':
        neighbors:[]
        name: 'Mary'
    'johnnybravo@mail.com':
        neighbors:[]
        name: 'John'
    [
        ["John",["john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"]],["Mary",["mary@mail.com"]],["John",["johnnybravo@mail.com"]]]
   
accounts = [
    ["John","johnsmith@mail.com","john_newyork@mail.com"],
    ["John","johnsmith@mail.com","john00@mail.com"],
    ["Mary","mary@mail.com"],
    ["John","johnnybravo@mail.com"]
    ]
Output: [
    ["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"]
    ["John","johnnybravo@mail.com"]]
    ["Mary","mary@mail.com"],
         */