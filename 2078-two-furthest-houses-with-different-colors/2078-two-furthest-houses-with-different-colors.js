/**
 * @param {number[]} colors
 * @return {number}
 */
const maxDistance = colors => {
    const n = colors.length;
    let left = 0, right = n - 1;

    for (let i = 0; i < n; i++)
        if (colors[i] !== colors[colors.length - 1]) {
            left = i;
            break;
        }

    for (let i = n - 1; i >= 0; i--)
        if (colors[i] !== colors[0]) {
            right = i;
            break;
        }

    return Math.max(n - 1 - left, right);
};