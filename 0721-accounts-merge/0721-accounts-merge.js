/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const hash = {}
    const emailToName = new Map()
    for (const account of accounts) {
        const tempStack = []
        const name = account[0]
        for (let i = 1; i < account.length; i++) {
            const email = account[i]
            if (!(email in hash)) {
                hash[email] = new Set()
                emailToName.set(email, name)
            }
            tempStack.push(email)
        }
        while (tempStack.length > 0) {
            const keyEmail = tempStack.pop()

            for (let i = 1; i < account.length; i++) {
                const email = account[i]
                if (keyEmail === email) continue
                
                hash[keyEmail].add(email)
            }
        }
    }

    const results = []
    const visited = new Set()

    const dfs = (key, data) => {
        if (visited.has(key)) {
            return []
        }
        data.push(key)
        visited.add(key)
        const neighbors = hash[key]
        for (const neighbor of neighbors) {
            dfs(neighbor, data)
        }
        return data
    }

    Object.keys(hash).forEach((key) => {
        if (!visited.has(key)){
            const emails = dfs(key, [])
            const name = emailToName.get(key)
            results.push([name, ...emails.sort()])
        }
    })

    return results
};