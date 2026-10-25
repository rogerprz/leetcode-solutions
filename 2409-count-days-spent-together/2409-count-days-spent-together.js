/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
   let daysArriveAlice=getDays(arriveAlice); 
   let daysArriveBob=getDays(arriveBob); 
   let daysLeaveAlice=getDays(leaveAlice); 
   let daysLeaveBob=getDays(leaveBob); 
   let max=Math.max(daysArriveAlice, daysArriveBob);
   let min=Math.min(daysLeaveAlice, daysLeaveBob);
   console.log(daysArriveAlice,daysArriveBob,daysLeaveAlice,daysLeaveBob);
   console.log(max,min);
   if(min<max) return 0;
   return min-max+1;
    }

    function getDays(date){
        let arr=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let days=date.split('-')[1];
        let month=date.split('-')[0];
        let total=0;
        for(let i=0; i<month-1; i++){
            total+=arr[i];
        }
        return total+Number(days);
    }