// console.log('interval');

// var merge = function (intervals) {
//     if (intervals.length <= 1) return intervals;

//     const sortedIntervals = intervals.sort((prev, next) => prev[0] - next[0])
//     // console.log('sortedIntervals', sortedIntervals);
//     let i = 0
//     const result = []
//     while (i < (sortedIntervals.length)) {
//          if (i === (sortedIntervals.length - 1)) {
//                 result.push(sortedIntervals[i])
//                 break
//             }
//         if (sortedIntervals[i][1] < sortedIntervals[i + 1][0]) {
//             result.push(sortedIntervals[i])
//             i += 1;
//             continue
//         }

//         let intEnd =  sortedIntervals[i][1] < sortedIntervals[i + 1][1] ? sortedIntervals[i + 1][1] : sortedIntervals[i][1]
//         sortedIntervals[i][1] = intEnd;
//         sortedIntervals.splice(i + 1, 1)
//         console.table(sortedIntervals);
//     }
//     return result
// };

// const intervals = [[1,3],[2,6],[8,10],[15,18]]

// console.log('result', merge(intervals));

// brick wall -> 554 leetCode

var lemonadeChange = function(bills) {
    const map = {
        5: 0,
        10: 0,
    };

    let result = true;

    bills.forEach(element => {

        switch (element) {
            case 5:
                map[5] += 1;
                break;
            
            case 10:
                if (map[5] === 0)  return result =  false;
                map[5] -= 1;
                map[10] += 1;
                break;
                
            case 20:
                if (map[10] !== 0 && map[5] !== 0) {
                    map[10] -= 1;
                    map[5] -= 1;
                    break;
                }

                if (map[5] < 3) return result =  false;

                map[5] -= 3;
                
                break;
        }

        console.log(map);
    });
   
    return result;

};

const bills = [5,5,5,5,20,20,5,5,20,5]

console.log(lemonadeChange(bills));

console.log('hola');
