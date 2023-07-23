function sum(n) {
    let i, s = 0.0;
    for (i = 1; i <= n; i++)
        s = s + 1 / i;

    return s;
}

// Driver code
let n = 5;
console.log(sum(n));