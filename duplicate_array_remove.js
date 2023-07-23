let chars = ['A', 'B', 'A', 'C', 'B', 'D'];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);