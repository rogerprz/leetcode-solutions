/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    
    const stack = []; // [{s: b, c: 1}]
    let res = ''    // [a, 2, ]
    for (let i = 0; i < chars.length;i++) {
        const char = chars[i]
    // ["a","a","b","b","c","c","c"]
    //       i    
        if (stack.length === 0) {
            stack.push({char, count: 1})
        } else {
            const top = stack[stack.length -1]

            if (top.char === char) {
                top.count++
            } else {
                res += (top.char)
                if (top.count !== 1) {
                    if (top.count >= 10) {
                        const nums = top.count.toString()
                        nums.split("").forEach((num)=> {
                            res += (num)
                        })
                    } else {
                        res += (top.count.toString())
                    }
                }
                stack.pop()
                stack.push({char, count:1})
            }
        }
     }
     if (stack.length > 0) {
        const top = stack.pop()
         res += (top.char)
         if (top.count !== 1) {
            if (top.count >= 10) {
                const nums = top.count.toString()
                nums.split("").forEach((num)=> {
                    res += (num)
                })
            } else {
                res += (top.count.toString())
            }
        }
     }
     for (let i = 0; i < res.length;i++) {
        chars[i] = res[i]
     }
     return res.length
};