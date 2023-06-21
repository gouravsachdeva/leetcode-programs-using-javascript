// Bubble Sort
/* Pass 1
3 5 2 4 1 (This will compare each item)
3 2 5 4 1
3 2 4 5 1
3 2 4 1 5
Pass 2
2 3 4 1 5
2 3 1 4 5
Pass 3
2 1 3 4 5
Pass 4
1 2 3 4 5 */

// Solution 1

let bubbleSort = ((arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1] + arr[j];
                arr[j + 1] = arr[j] - arr[j + 1];
                arr[j] = arr[j] - arr[j + 1];
            }
        }
    }
    return arr;
})

// Solution 2 (Optimized Solution)

let bubbleSort2 = ((arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let swiped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1] + arr[j];
                arr[j + 1] = arr[j] - arr[j + 1];
                arr[j] = arr[j] - arr[j + 1];
                swiped = true;
            }
        }
        if (!swiped) break;
    }
    return arr;
})