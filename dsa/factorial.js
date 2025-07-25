function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i
    }
    return result

}
console.log(factorial(2)) //1
console.log(factorial(3)) //1
console.log(factorial(5)) //120
