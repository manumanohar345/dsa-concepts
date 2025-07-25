function main() {
    let arr = [7, 4, 3, 5, 1];
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let mini = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[mini]) {
                mini = j;
            }
        }
        // Swap elements
        [arr[i], arr[mini]] = [arr[mini], arr[i]];
    }

    // Print the sorted array
    console.log(arr.join(" "));
}

main();
