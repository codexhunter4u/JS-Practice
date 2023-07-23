let strArray = ["q", "w", "w", "w", "e", "e", "i", "u", "r", 1, 1];
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

//console.log(findDuplicates(strArray)) // All duplicates
console.log([...new Set(findDuplicates(strArray))]) // Unique duplicates