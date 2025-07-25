function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
        while (i <= high && arr[i] <= pivot) i++;
        while (arr[j] > pivot) j--;

        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
}

function quickSort(arr, low, high) {
    if (low < high) {
        let pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
}

// Test the implementation
let arr = [7, 4, 3, 5, 1];
quickSort(arr, 0, arr.length - 1);

console.log(arr.join(" "));
