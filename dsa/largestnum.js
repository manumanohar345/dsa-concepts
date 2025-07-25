const arr = [3, 4, 1, 8, 15, 4]
let maxnum = -Infinity;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxnum) {
        maxnum = arr[i];
    }
}
console.log(maxnum);