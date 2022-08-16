// console.log('interval');

var merge = function (intervals) {
    if (intervals.length <= 1) return intervals;

    const sortedIntervals = intervals.sort((prev, next) => prev[0] - next[0])
    // console.log('sortedIntervals', sortedIntervals);
    let i = 0
    const result = []
    while (i < (sortedIntervals.length)) {
         if (i === (sortedIntervals.length - 1)) {
                result.push(sortedIntervals[i])
                break
            }
        if (sortedIntervals[i][1] < sortedIntervals[i + 1][0]) {
            result.push(sortedIntervals[i])
            i += 1;
            continue
        }

        let intEnd =  sortedIntervals[i][1] < sortedIntervals[i + 1][1] ? sortedIntervals[i + 1][1] : sortedIntervals[i][1]
        sortedIntervals[i][1] = intEnd;
        sortedIntervals.splice(i + 1, 1)
        console.table(sortedIntervals);
    }
    return result
};

const intervals = [[1,3],[2,6],[8,10],[15,18]]

console.log('result', merge(intervals));