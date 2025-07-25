const array = [4, 6, 7, 13, 15, 16, 17, 22, 32];
const x = 24;
let low = 0;
let high = array.length - 1;
let found = -1;

while (low <= high) {
  const mid = Math.floor((low + high) / 2);

  if (array[mid] === x) {
    console.log("Found at Index: " + mid);
    found = 1;
    break;
  }

  if (array[mid] < x) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

if (found === -1) {
  console.log("Element not found");
}
