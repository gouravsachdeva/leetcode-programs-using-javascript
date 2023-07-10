// Merge Sort
/* Merge sort: Divide, sort, and merge for efficient sorting.
Let's consider the following unsorted list: [7, 2, 9, 1, 5]

Divide: The list is divided into two halves: [7, 2] and [9, 1, 5].
Conquer: Each sublist is recursively sorted.
For [7, 2], it further divides into [7] and [2]. Since both sublists have only one element, they are considered sorted.
For [9, 1, 5], it further divides into [9] and [1, 5]. The sublist [1, 5] is divided into [1] and [5]. Again, all sublists contain one element and are sorted.
Merge: The sorted sublists are merged back together in ascending order.
Merging [7] and [2] gives [2, 7].
Merging [1] and [5] gives [1, 5].
Merging [9] and [1, 5] gives [1, 5, 9].
Finally, merging [2, 7] and [1, 5, 9] gives the fully sorted list: [1, 2, 5, 7, 9].
So, the sorted list using merge sort is: [1, 2, 5, 7, 9].
*/

let mergeSort = ((arr) => {
    if (arr.length == 1) {
        return arr;
    }

    let mid = Math.floor((arr.length) / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
})

let merge = ((left, right) => {
    let i = 0;
    let j = 0;
    let arr = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr.push(left[i]);
            i++;
        } else {
            arr.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        arr.push(left[i]);
        i++;
    }
    while (j < right.length) {
        arr.push(right[j]);
        j++;
    }

    return arr;
})