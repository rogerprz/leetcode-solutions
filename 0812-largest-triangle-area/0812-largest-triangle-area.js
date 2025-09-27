/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let maxArea = 0;
    const n = points.length;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                const area = 0.5 * Math.abs(
                    points[i][0] * (points[j][1] - points[k][1]) +
                    points[j][0] * (points[k][1] - points[i][1]) +
                    points[k][0] * (points[i][1] - points[j][1])
                );
                maxArea = Math.max(maxArea, area)
            }
        }
    }

    return maxArea;
};