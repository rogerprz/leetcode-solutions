var getOrder = function (tasks) {
    if (!tasks || tasks.length === 0) return [];
    // sort by start time and task duration
    const sortedTasks = tasks
        .map((e, i) => { return { startTime: e[0], duration: e[1], index: i } })
        .sort((a, b) => a.startTime - b.startTime);
    // {startTime: x, duration, y, index: z}
    const minQueue = new PriorityQueue((a, b) => {
        if (a.duration === b.duration) return a.index - b.index;
        else return a.duration - b.duration;
    })

    let cpuStartTime = 0;
    const ans = [];
    let i = 0;
    while (i < sortedTasks.length || !minQueue.isEmpty()) {
        // next task if queue empty
        if (minQueue.isEmpty() && cpuStartTime < sortedTasks[i].startTime) {
            cpuStartTime = sortedTasks[i].startTime;
        }
        while (i < sortedTasks.length && cpuStartTime >= sortedTasks[i].startTime) {
            minQueue.enqueue(sortedTasks[i]);
            i += 1;
        }

        const nextTask = minQueue.dequeue();
        cpuStartTime += nextTask.duration;
        ans.push(nextTask.index);
    }

    return ans;
};