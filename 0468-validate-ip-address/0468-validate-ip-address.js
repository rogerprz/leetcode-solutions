/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    if (queryIP.includes(".")) {
        return verifyIp4Address(queryIP)
    } else {
        return verifyIp6Addreess(queryIP)
    }
};

function verifyIp4Address(queryIP) {
    const arr = queryIP.split(".")
    if (arr.length != 4) return "Neither"

    for (const ip of arr) {
        const num  = parseInt(ip)
        const numLen = num.toString().length
        if (numLen !== ip.length) {
            return "Neither"
        }

        if (num < 0 || num > 255) return "Neither"
    }
    return "IPv4"  
}

function verifyIp6Addreess(queryIP) {
    const arr = queryIP.split(":")
    if (arr.length != 8) {
        return "Neither"
    }
    const valid = "0123456789abcdefABCDEF"
    for (const ip of arr) {
        if (ip.length > 4 || ip.length < 1) {
            return "Neither"
        }
        for (const elem of ip) {
            if (!valid.includes(elem)) {
                return 'Neither'
            }
        }
    }
    return "IPv6"
}