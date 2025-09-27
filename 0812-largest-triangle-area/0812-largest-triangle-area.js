/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let maxArea = 0;
    const n = points.length;

    for (let i = 0; i < n; ++i) {
        const [xI, yI] = points[i];
        for (let j = i + 1; j < n; ++j) {
            const [xJ, yJ] = points[j];

            for (let k = j + 1; k < n; ++k) {
                const [xK, yK] = points[k];
                const area = 0.5 * Math.abs(
                    xI*(yJ - yK) + 
                    xJ*(yK - yI) + 
                    xK*(yI - yJ)
                    );
                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;
};