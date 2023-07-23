document.getElementById('lightOn').onclick = function() {
    document.getElementById('myImage').src='pic_bulbon.gif';
};

document.getElementById('lightOff').onclick = function() {
    document.getElementById('myImage').src='pic_bulboff.gif';
};


let name = 'Mohan';

function getName () {
    let name = 'Akash';
    console.log(name);
}
getName();