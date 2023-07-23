var arr = [5, 1, 9, 5, 7];
var smallest = arr[0];

for (var i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

console.log(smallest);