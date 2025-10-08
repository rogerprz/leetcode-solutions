/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
  events.sort((a,b) => a[1] - b[1]);
  const maxDay = events.at(-1)[1];
  const days = new Array(maxDay + 1).fill(0).map((_, i) => i);

  const search = (index) => {
    if (days[index] !== index) {
      days[index] = search(days[index]);
    }
    return days[index];
  }

  let count = 0;
  for(const [start, end] of events) {
    const day = search(start);
    if (day <= end) {
      count += 1;
      days[day] = search(day + 1);
    }
  }
  return count;


    
};