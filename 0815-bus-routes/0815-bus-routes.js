/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
    if (source === target) return 0;

    const routeInStop = new Map()

    for (let i = 0; i < routes.length; i++) {
        for (const stop of routes[i] ) {
            if (!routeInStop.has(stop)) {
                routeInStop.set(stop, [])
            }
            routeInStop.get(stop).push(i)
        }
    }

    const queue = []
    const visitedRoutes = new Set()

    if (routeInStop.has(source)) {
        for (const route of routeInStop.get(source)) {
            visitedRoutes.add(route)
            queue.push(route)
        }
    }

    const visitedStops = new Set();
    let busesTaken = 1;
    while (queue.length > 0) {
        const level = queue.length; 

        for (let i = 0; i < level; i++) {
            const routeIdx = queue.shift();
            const stops = routes[routeIdx]

            for (const currStop of stops) {
                if (currStop === target) return busesTaken

                if (visitedStops.has(currStop)) continue;
                visitedStops.add(currStop)

                for (const nextRouteIdx of routeInStop.get(currStop)) {
                        if (!visitedRoutes.has(nextRouteIdx)) {
                            queue.push(nextRouteIdx)
                            visitedRoutes.add(nextRouteIdx)
                        }
                    }

            }
        }
        busesTaken++
    }

    return -1;
};