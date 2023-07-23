let name = {
    firstname: 'vijay',
    lastname: "jadhav"
};

let printFullname = function(hometown, state) {
    console.log(this.firstname + ' ' + this.lastname + ' ' + hometown + ' ' + state);
}
printFullname.call(name, 'Nanded', 'Maharshtra');

let name2 = {
    firstname: 'sachine',
    lastname: "jadhav"
};
printFullname.call(name2, 'Nanded', 'Maha');
printFullname.apply(name2, ['nanded', 'maharshtra']);
let MyfullName = printFullname.bind(name2, 'Pune', 'Maharshtra');

MyfullName();