function init() {
    var name = 'Mozilla'; // name is a local variable created by init
    var hello = 'yes'

    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }

    function NewayName() { // displayName() is the inner function, a closure
        console.log(hello); // use variable declared in the parent function
    }
    return displayName(), NewayName();
}
init();