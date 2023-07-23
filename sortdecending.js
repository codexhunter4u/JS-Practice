var numArray = [1, 140000, 104, 99, 1];
//numArray.sort().reverse();
numArray.sort((a, b) => (a > b ? -1 : 1))

console.log(numArray)