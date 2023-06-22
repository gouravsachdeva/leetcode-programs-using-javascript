// Insertion Sort
/* In Insertion Sort it will start sorting sub arrays starting from index 1 then it will move to index 2
sort all the elements till index2 and so on
4 3 5 7 2 1
3 4 5 7 2 1
3 4 5 7 2 1 
3 4 5 7 2 1
3 4 5 2 7 1
3 4 2 5 7 1
3 2 4 5 7 1
2 3 4 5 7 1
2 3 4 5 1 7
2 3 4 1 5 7
2 3 1 4 5 7
2 1 3 4 5 7
1 2 3 4 5 7 */

let insertionSort = ((arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp
            } else {
                break;
            }
        }
    }
    return arr;
})