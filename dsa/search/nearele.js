const arr = [2, 8, 4, 5, 1, 7, 10];
const n = arr.length;
const stack = [];

for (let i = 0; i < n; i++) {
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
        stack.pop();
    }

    if (stack.length === 0) {
        console.log("-1");
    } else {
        console.log(stack[stack.length - 1]);
    }

    stack.push(arr[i]);
}
// Print the sorted array
for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}
