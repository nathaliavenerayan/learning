function toCelsius(f) {
    return (5/9) * (f-32);
}

document.getElementById('p12').innerHTML = toCelsius;
document.getElementById('p13').innerHTML = "The temperature is " +
toCelsius(90) + " degrees Celsius";


function name() {
    var fName = "Jane Doe";
    document.getElementById('p14').innerHTML = typeof fName + " " + 
    fName;
}

// Call function
name();

document.getElementById('p15').innerHTML = typeof fName;

var dog = "Teacup dog";
document.getElementById('p16').innerHTML = dog;

// Create an object
var car = {
    type: "Honda Civic",
    model: "1000",
    color: "silver",
    age: 3
};

// Display some data from the object:
document.getElementById('p17').innerHTML = "The car is a " +
car.type + " that is " + car.age + " years old.";

var person = {
    firstName: "Nathalia",
    lastName: "V.",
    age: 23,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

document.getElementById('p18').innerHTML = person.fullName() + 
" " + person.age;

// Is there a way to use a return statement?
function randomNum() {
    document.getElementById('p19').innerHTML = Math.random(0,100) + 
    " " + Date();
}

function changeButton() {
    document.getElementById('b01').innerHTML = Math.random();
}

var text = "The length of this string is ";
document.getElementById('p20').innerHTML = text + text.length;

var text1 = "I am a \"special\" escape character."
document.getElementById('p21').innerHTML = text1;

document.getElementById('p22').innerHTML = text1 + "<br/>" + text1.length;

var pos = text1.indexOf("escape");
document.getElementById('p23').innerHTML = text1 + "<br/>" + pos;

var charC = 'c';
var lastPos = text1.lastIndexOf(charC);
document.getElementById('p24').innerHTML = text1 + "<br/>" + charC + "<br/>" + lastPos;

var specPoc = text1.indexOf(charC, 15);
document.getElementById('p25').innerHTML = text1 + '<br/>' + specPoc;


var fruits = "Apple, Banana, Orange, Strawberry";
var fSlice = fruits.slice(0,5);
document.getElementById('p26').innerHTML = fruits + 
'<br/> Result of passing two positive parameters: ' + fSlice;

var negFSlice = fruits.slice(-10, -1);
document.getElementById('p27').innerHTML = 'Result of (-10, -1): ' +
negFSlice;

var negSlice = fruits.slice(-10);
document.getElementById('p28').innerHTML = 'Result of passing one negative argument (-10): ' +
negSlice;

var posSlice = fruits.slice(6);
document.getElementById('p29').innerHTML = 'Result of passing one positive argument (6): ' +
posSlice;

var subSlice = fruits.substring(0, 5);
document.getElementById('p30').innerHTML = 'Result of passing two positive parameters: ' +
subSlice;

var subSlice1 = fruits.substring(5);
document.getElementById('p31').innerHTML = 'Result of passing one positive parameter: ' +
subSlice1;

var ssSlice = fruits.substr(0, 5);
document.getElementById('p32').innerHTML = 'Result of passing index and length parameter: ' +
ssSlice;

var ssSlice1 = fruits.substr(0);
document.getElementById('p33').innerHTML = 'Result of passing index parameter only: ' +
ssSlice1;

var ssSliceNeg = fruits.substr(-10);
document.getElementById('p34').innerHTML = 'Result of passing negative first parameter: ' +
ssSliceNeg;

// Replace String Method
function myReplace() {
    var str1 = document.getElementById('p35').innerHTML;
    var txt1 = str1.replace("Spring", "Winter");
    document.getElementById('p35').innerHTML = txt1;
}

function myReplace2() {
    var str = document.getElementById('p36').innerHTML;
    var txt = str.replace(/spring/i, "Winter");
    document.getElementById('p36').innerHTML = txt;
}

function myRep() {
    var str = document.getElementById('p37').innerHTML;
    var txt = str.replace(/i/g, "GOTEM");
    document.getElementById('p37').innerHTML = txt;
}
