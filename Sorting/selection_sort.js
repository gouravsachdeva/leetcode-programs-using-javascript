//Selection Sort
/* Find the max or min value from the given array and place that into there correct position
3 5 2 4 1 (We are doing with finding max)
3 1 2 4 5 // 5 was maximum value so we swaped 5 with its correct index value 1\
3 1 2 4 5 // As 4 is in it's correct position so no swap
2 1 3 4 5
1 2 3 4 5 */

var selectionSort = ((arr) => {
    let len = arr.length - 1;
    for (let i = len; i > 0; i--) {
        let max = 0;
        for (let j = 0; j <= i; j++) {
            if (arr[max] < arr[j]) {
                max = j
            }
        }
        if (i != max) {
            arr[i] = arr[i] + arr[max];
            arr[max] = arr[i] - arr[max];
            arr[i] = arr[i] - arr[max];
        }
    }
    return arr;
})