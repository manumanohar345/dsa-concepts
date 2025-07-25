function merge(arr, p, q, r) {
    const n1 = q - p + 1;
    const n2 = r - q;

    const L = new Array(n1);
    const M = new Array(n2);

    for (let i = 0; i < n1; i++) {
        L[i] = arr[p + i];
    }
    for (let j = 0; j < n2; j++) {
        M[j] = arr[q + 1 + j];
    }

    let i = 0, j = 0, k = p;

    while (i < n1 && j < n2) {
        if (L[i] <= M[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = M[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = M[j];
        j++;
        k++;
    }
}

function mergeSort(arr, l, r) {
    if (l < r) {
        const m = Math.floor(l + (r - l) / 2);

        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);

        merge(arr, l, m, r);
    }
}

function main() {
    const arr = [7, 4, 3, 5, 1];
    const size = arr.length;

    mergeSort(arr, 0, size - 1);

    console.log(arr.join(" "));
}

main();
