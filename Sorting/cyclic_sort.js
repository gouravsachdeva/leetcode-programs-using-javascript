// Cyclic Sort
/* If array numbers are from 1 to N use Cyclic Sort the time complaxity will be O(N).
5 4 3 2 1
1 4 3 2 5
1 2 3 4 5 */

let cyclicSort = ((arr) => {
    let count = 0;
    while (count < arr.length - 1) {
        if (arr[count] != count + 1) {
            let temp = arr[count] - 1;
            arr[count] = arr[count] + arr[temp];
            arr[temp] = arr[count] - arr[temp];
            arr[count] = arr[count] - arr[temp];
        } else {
            count++;
        }
    }
    return arr
})