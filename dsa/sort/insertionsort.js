let arr = [7, 4, 3, 5, 1];
let n = arr.length;

for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > curr) {
        arr[j + 1] = arr[j];
        j--;
    }

    arr[j + 1] = curr;
}

// Print the sorted array
for (let i = 0; i < n; i++) {
    //   process.stdout.write(arr[i] + " ");
    console.log(arr[i]);
}
