function factorial(n) {
    //base case for 0!
    if (n == 0 || n == 1) {
        return 1;
        //recursion case
    } else {
        return n * factorial(n - 1);
    }
}
let n = 6;
answer = factorial(n)

console.log(answer);