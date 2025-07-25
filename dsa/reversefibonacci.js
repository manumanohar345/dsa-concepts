function recursiveFibonnaci(n) {
    if (n < 2) {
        return n
    }
    return recursiveFibonnaci(n - 1) + recursiveFibonnaci(n - 2)
}

console.log(recursiveFibonnaci(0)) // 0
console.log(recursiveFibonnaci(1)) // 1
console.log(recursiveFibonnaci(6)) // 8
