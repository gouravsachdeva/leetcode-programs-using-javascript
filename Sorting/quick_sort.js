// Quick Sort
/* 
Quick sort: Efficient sorting algorithm using partitioning and recursion.
Choose the pivot: In this case, the pivot is the middle element, which is 9.

Partition the list: Rearrange the elements such that all elements less than the pivot (9) are placed to its left, and all elements greater than the pivot are placed to its right.

Partitioned list: [7, 2, 1, 5, 9]
Recursively apply the quick sort algorithm to the sublists on the left and right sides of the pivot.

Left sublist: [7, 2, 1, 5]
Right sublist: [9]
Repeat steps 1-3 for each sublist until all sublists are sorted.

After sorting the left sublist: [1, 2, 5, 7]
The right sublist is already sorted as it only contains one element: [9]
Concatenate the sorted sublists to obtain the final sorted list: [1, 2, 5, 7, 9]

So, the sorted list using quick sort with the pivot as the middle element is: [1, 2, 5, 7, 9].
*/

let quickSort = ((arr, low, high) => {

    if (low >= high) {
        return
    }

    let start = low;
    let end = high;

    let mid = Math.floor(start + (end - start) / 2);
    let pivot = arr[mid];

    while (start <= end) {
        while (arr[start] < pivot) {
            start++;
        }
        while (arr[end] > pivot) {
            end--;
        }

        if (start <= end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    quickSort(arr, low, end)
    quickSort(arr, start, high)
})
