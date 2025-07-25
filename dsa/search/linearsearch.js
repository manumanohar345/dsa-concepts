const arr = [7, 4, 3, 5, 1];
const key = 5;
let found = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === key) {
    console.log("Found at Index: " + i);
    found = 1;
    break; // Optional: break if you want to stop at the first match
  }
}

if (found === -1) {
  console.log("Element not found");
}
