let arr = [1, 4, 5, 3, 7];
let n = arr.length;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j + 1] < arr[j]) {
            // Swap elements
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

// Print sorted array
for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}
// console.log("\nSorted array:");
// for (let i = 0; i < n; i++) {
