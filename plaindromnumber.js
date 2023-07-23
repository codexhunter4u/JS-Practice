function Palindrome(number) {
    var rem, temp, final = 0;
    temp = number;
    while (number > 0) {
        rem = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + rem;
    }
    if (final == temp) {
        console.log("The inputed number is Palindrome");
    } else {
        console.log("The inputted number is not palindrome");
    }
}
Palindrome(121)