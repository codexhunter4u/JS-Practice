function getFrequency(string) {
    var string = string.split(" ").join("");
    console.log(string);
    var freq = {};
    for (var i = 0; i < string.length; i++) {
        var character = string.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }

    return freq;
};

console.log(getFrequency('Vijay Jadhav'));