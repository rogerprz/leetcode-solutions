/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function (arr) {
   const answer = new Set();
  let prev = new Set();

  for (const num of arr) {
    const curr = new Set([num]);
    for (const y of prev) {
      curr.add(y | num);
    }

    for (const z of curr) {
      answer.add(z);
    }
    prev = curr;
    }
    return answer.size;
}