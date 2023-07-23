const eventOdd = (Number) => {
    if (Number % 2 === 0) {
        return `${Number} is even`;
    } else {
        return `${Number} is odd`;
    }
}
console.log(eventOdd(3))