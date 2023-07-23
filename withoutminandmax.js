var maxArray = (arr) => {
    let i;
    var min = arr[0];
    var max = arr[0];
    var finalarray = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
            console.log(max);
        } else if (arr[i] < min) {
            min = arr[i]
            console.log(min);
        } else {
            finalarray.push(arr[i]);
        }
    }
    return finalarray;
}
console.log(maxArray([10, 3, 8, 1, 33]));