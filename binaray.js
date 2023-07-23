let array = [0, 0, 1, 0, 0, 1, 0];
var copay = [];
for (let i = 0; i - array.length; i++) {
    if (array[i] == 0) {
        copay.push(array[i]);
    } else {
        copay.unshift(array[i]);
    }
    continue;
}
console.log(copay);