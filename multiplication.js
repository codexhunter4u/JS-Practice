var multiplication = (number, range) => {
    let result = '';
    for (let i = 1; i <= range; i++) {
        var final = i * number;
        result += `${number}*${i} =${final}` + '\n';
    }
    return result;
}
console.log(multiplication(2, 10));