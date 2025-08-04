/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let max = 0;
    let l = 0;
    let map = new Map();

    fruits.forEach((fruit, i)=> {
        if (!(map.has(fruit))){
            map.set(fruit, 0)
        }
        map.set(fruit, map.get(fruit)+1)

        while (map.size > 2) {
            const tail = fruits[l];
            map.set(tail, map.get(tail) - 1);
            
            if (map.get(tail) === 0) {
                map.delete(tail)
            }
            l++
        }
        max = Math.max(max, i - l + 1)
    })
    return max;
};