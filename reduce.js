const array = [, 3, 5, 4, 5];
let sum = array.reduce((acc, curr) => {
    return acc + curr;
});

console.log(sum);